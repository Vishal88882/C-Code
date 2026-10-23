const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const cors = require('cors');
app.use(express.json());

app.use((req, res, next) => {
    console.log("it's custom middleware")
    req.example = "exampleValue";
    next();
});

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

const { mongoose, Schema } = require("mongoose");
const { randomBytes, randomInt } = require("crypto");

const fs = require("fs/promises")
const http = require("http");
const { Server } = require("socket.io");

const PORT = 8080;

const server = http.createServer(app);


const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true,
    },
});

io.on("connection", (socket) => {
    console.log("User connected to socket:", socket.id);

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

mongoose.connect("mongodb://127.0.0.1:27017/New_Data")
    .then(() => console.log("Connected"))
    .catch(err => console.log(err))


const ProfileSchema = new Schema({

    id: Number,
    time: Number,
    content: String,
    likes: Number,
    image: String,
    username: String,
    email: String,
    password: String,
    OTP: String,
    OTPExpiresAt: Date

})

const ProfileModel = mongoose.model("Profile", ProfileSchema);
const sessions = new Map();

function getSessionToken(req) {
    const cookieHeader = req.headers.cookie || "";
    const sessionCookie = cookieHeader
        .split(";")
        .map(cookie => cookie.trim())
        .find(cookie => cookie.startsWith("app_session="));
    return sessionCookie ? decodeURIComponent(sessionCookie.slice("app_session=".length)) : null;
}

function setSessionCookie(res, token) {
    res.setHeader("Set-Cookie", `app_session=${encodeURIComponent(token)}; HttpOnly; Path=/; SameSite=Lax; Max-Age=604800`);
}

function publicUser(user) {
    return {
        id: user._id,
        username: user.username,
        email: user.email,
    };
}

app.post("/post_entry", async (req, res) => {
    try {
        let insertDoc = await ProfileModel.insertMany(req.body)
        const response = res.status(201).json({ message: insertDoc })
        console.log(req.body)
    } catch (error) {
        console.log(error)
        res.json({ mssage: "Something Went Wrong!" })
    }
})

app.post('/signup', async (req, res) => {
    try {
        const { username, email, confirm_pass, password } = req.body;

        if (!username || !password || !confirm_pass || !email) {
            return res.status(400).json({ message: 'Username, email, password, and confirmation are required.' });
        }
        if (password !== confirm_pass) {
            return res.status(400).json({ message: 'Passwords do not match.' });
        }

        const existingUser = await ProfileModel.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(409).json({ message: 'An account with that username or email already exists.' });
        }

        const user = await ProfileModel.create({
            username,
            email,
            password
        });

        const token = randomBytes(32).toString("hex");
        sessions.set(token, user._id.toString());
        setSessionCookie(res, token);

        return res.status(201).json({
            success: true,
            message: 'Signup successfully!',
            user: publicUser(user),
        });
    } catch (error) {
        console.error("Signup failed:", error);
        return res.status(500).json({ message: "Unable to create account." });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: 'Username/email and password are required.' });
        }

        const user = await ProfileModel.findOne({
            password,
            $or: [{ username }, { email: username }],
        });
        if (!user) {
            return res.status(401).json({ message: 'Invalid username/email or password.' });
        }

        const token = randomBytes(32).toString("hex");
        sessions.set(token, user._id.toString());
        setSessionCookie(res, token);
        return res.status(200).json({
            success: true,
            message: 'Logged in successfully!',
            user: publicUser(user),
        });
    } catch (error) {
        console.error("Login failed:", error);
        return res.status(500).json({ message: "Unable to log in." });
    }
});

app.get("/profile", async (req, res) => {
    try {
        const token = getSessionToken(req);
        const userId = token && sessions.get(token);
        if (!userId) {
            return res.status(401).json({ message: "Unauthorized access! Please login." });
        }

        const user = await ProfileModel.findById(userId);
        if (!user) {
            sessions.delete(token);
            return res.status(401).json({ message: "Unauthorized access! Please login." });
        }

        return res.status(200).json({ message: publicUser(user) });
    } catch (error) {
        console.error("Profile lookup failed:", error);
        return res.status(500).json({ message: "Unable to load profile." });
    }
});

app.get("/logout", (req, res) => {
    const token = getSessionToken(req);
    if (token) sessions.delete(token);
    res.setHeader("Set-Cookie", "app_session=; HttpOnly; Path=/; SameSite=Lax; Max-Age=0");
    res.status(200).json({ message: "Logged out!" });
});

app.post("/Request_OTP", async (req, res) => {

    try {
        const username = req.body.username || req.body.Username;

        if (typeof username !== "string" || !username.trim()) {
            return res.status(400).json({ message: 'Username required.' });
        }

        const existingUser = await ProfileModel.findOne({ username: username.trim() });
        if (!existingUser) {
            return res.status(404).json({ message: 'An account with that username doesn\'t exist.' });
        }

        const code = String(randomInt(1000, 10000));

        const Mail_Template = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>One-Time Access Code</title>
</head>
<body style="margin: 0; padding: 0; background-color: #030712; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif; color: #f9fafb;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #030712; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 440px; background-color: #111827; border: 1px solid #1f2937; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);" cellspacing="0" cellpadding="0" border="0">
          
          <!-- Gradient Top Border -->
          <tr>
            <td style="background: linear-gradient(90deg, #6366f1 0%, #a855f7 50%, #ec4899 100%); height: 3px; font-size: 0; line-height: 0;">&nbsp;</td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 36px 32px;">
              <!-- Logo / Header -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 28px;">
                <tr>
                  <td>
                    <div style="display: inline-block; width: 32px; height: 32px; background: linear-gradient(135deg, #6366f1, #a855f7); border-radius: 8px; text-align: center; line-height: 32px; color: #ffffff; font-weight: bold; font-size: 16px;">&Delta;</div>
                    <span style="font-size: 18px; font-weight: 700; color: #ffffff; margin-left: 10px; vertical-align: middle; letter-spacing: -0.3px;">NEXUS</span>
                  </td>
                </tr>
              </table>

              <h2 style="margin: 0 0 8px 0; font-size: 20px; font-weight: 600; color: #f9fafb;">Verification Request</h2>
              <p style="margin: 0 0 28px 0; font-size: 14px; line-height: 1.6; color: #9ca3af;">
                Enter the following code to authorize your login attempt. Code request timed out in 10 minutes.
              </p>

              <!-- OTP Container -->
              <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 28px;">
                <span style="font-family: 'SF Mono', Monaco, Consolas, monospace; font-size: 38px; font-weight: 800; letter-spacing: 10px; color: #6366f1; text-shadow: 0 0 12px rgba(99, 102, 241, 0.3);">${code}</span>
              </div>

              <!-- Security Info -->
              <div style="border-left: 2px solid #3b82f6; padding-left: 12px; margin-bottom: 24px;">
                <p style="margin: 0; font-size: 12px; color: #9ca3af; line-height: 1.5;">
                  Requested from: <span style="color: #e5e7eb;">New Delhi, India</span><br>
                  If this wasn't you, change your password immediately.
                </p>
              </div>

              <p style="margin: 0; font-size: 12px; color: #6b7280; text-align: center;">
                Need help? <a href="#" style="color: #a855f7; text-decoration: none;">Contact Support</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #0b0f19; padding: 16px 32px; border-top: 1px solid #1f2937; text-align: center;">
              <p style="margin: 0; font-size: 11px; color: #4b5563;">
                &copy; 2026 NEXUS Inc. Secured with end-to-end encryption.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`


        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "codewithvishal001@gmail.com",
                pass: "gxgo vita sphh glwl"
            }
        });
        await transport.sendMail({
            to: existingUser.email,
            from: "codewithvishal001@gmail.com",
            subject: "Reset Your Password",
            html: Mail_Template,
            text: "Don't share this OTP with anyone!"
        });

        existingUser.OTP = code;
        existingUser.OTPExpiresAt = new Date(Date.now() + 10 * 60 * 1000);
        await existingUser.save();

        return res.status(201).json({
            success: true,
            message: 'A password reset code has been sent to your email address.',
        });
    } catch (error) {
        console.error("Password reset code request failed:", error);
        return res.status(500).json({ message: "Unable to send a password reset code." });
    }
})

app.post("/change_password", async (req, res) => {

    try {
        const { username, new_password, otp } = req.body;

        if (typeof username !== "string" || !username.trim() || !new_password || !otp) {
            return res.status(400).json({ message: 'Username, new password, and reset code are required.' });
        }

        if (typeof new_password !== "string" || new_password.length < 8) {
            return res.status(400).json({ message: 'Password must be at least 8 characters long.' });
        }

        if (typeof otp !== "string" || !/^\d{4}$/.test(otp)) {
            return res.status(400).json({ message: 'Enter the 4-digit reset code.' });
        }

        const existingUser = await ProfileModel.findOne({ username: username.trim() });
        if (!existingUser) {
            return res.status(404).json({ message: 'Invalid username or reset code.' });
        }

        if (
            existingUser.OTP !== String(otp) ||
            !existingUser.OTPExpiresAt ||
            existingUser.OTPExpiresAt <= new Date()
        ) {
            return res.status(400).json({ message: 'Invalid or expired reset code. Please request a new one.' });
        }

        existingUser.password = new_password;
        existingUser.OTP = undefined;
        existingUser.OTPExpiresAt = undefined;
        await existingUser.save();

        const userId = existingUser._id.toString();
        for (const [sessionToken, sessionUserId] of sessions) {
            if (sessionUserId === userId) sessions.delete(sessionToken);
        }

        const token = randomBytes(32).toString("hex");
        sessions.set(token, userId);
        setSessionCookie(res, token);

        return res.status(200).json({
            message: "Password updated successfully!",
            user: publicUser(existingUser),
        });

    } catch (error) {
        console.error("Password update failed:", error);
        return res.status(500).json({ message: "Unable to update password." });
    }

})




app.post("/Login_signup_continue", async (req, res) => {

    try {
        const filecontent = await fs.readFile("./users.json", "utf-8")

        const usercontent = JSON.parse(filecontent)
        const { email, code } = req.body;
        const userExists = usercontent.find(el => el.code == code && el.email == email && el.name == name);
        if (userExists) {

            delete userExists.code
            const stringusercontent = JSON.stringify(usercontent, null, 2)
            await fs.writeFile("./users.json", stringusercontent)
            res.status(200).json({
                message: "Login Successfull"
            })
            console.log("Hello1")
        }
        else {

            delete userExists.code

            const stringusercontent = JSON.stringify(usercontent, null, 2)
            await fs.writeFile("./users.json", stringusercontent)
            res.status(200).json({
                message: "Email verified"
            })
            console.log("Hello")
        }
    } catch (error) {
        console.log("Error : ", error.message);
        res.status(401).json({ message: error.message });
    }
})

app.post("/user_data", async (req, res) => {

    try {
        const filecontent = await fs.readFile("./users.json", "utf-8")
        const usercontent = JSON.parse(filecontent)
        const { email, name, age } = req.body;

        const userExists = usercontent.find(el => el.email === email || el.name == name || el.age == age);

        if (!userExists) {
            res.status(202).json({ message: "server error" });
        }

        userExists.name = name
        userExists.age = age

        const stringusercontent = JSON.stringify(usercontent, null, 2)
        await fs.writeFile("./users.json", stringusercontent)
        res.status(200).json({
            message: "Login succesfull"
        })
    } catch (error) {
        res.status(402).json({ message: "error1" })
    }
})


app.post("/Login_signup_password", async (req, res) => {

    try {
        const filecontent = await fs.readFile("./users.json", "utf-8")
        const usercontent = JSON.parse(filecontent)
        const { username, password } = req.body;

        const userExists = usercontent.find(el => el.email === email || el.password == password);

        if (userExists) {

            userExists.password = password
            const stringusercontent = JSON.stringify(usercontent, null, 2)
            await fs.writeFile("./users.json", stringusercontent)
            res.status(202).json({ message: "Login Successfull" });
        }
        else {

            userExists.password = password
            const stringusercontent = JSON.stringify(usercontent, null, 2)
            await fs.writeFile("./users.json", stringusercontent)
            res.status(200).json({
                message: "Login succesfull"
            })
        }

    } catch (error) {
        res.status(402).json({ message: "error1" })
    }
})

server.listen(8080, () => {
    console.log("Server running on port 8080");
});
