import { Camera, Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SignupPage({ onSignupSuccess }) {

  const [username, setUsername] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [confirm_pass, setConfirm_pass] = useState("")
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          confirm_pass
        }),
        credentials: "include",
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Signup failed!");
      }

      onSignupSuccess(data.user);
      navigate("/home", { replace: true });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-pink-100 via-white to-violet-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-black px-4 py-8">
      <div className="w-full max-w-md rounded-3xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shadow-2xl border border-white/30 dark:border-zinc-800 p-8">

        {/* Logo */}
        <div className="flex flex-col items-center">
          <div className="h-16 w-16 rounded-2xl bg-linear-to-br from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center shadow-lg">
            <Camera className="text-white" size={30} />
          </div>

          <h1 className="mt-5 text-3xl font-bold text-zinc-900 dark:text-white">
            Create Account
          </h1>

          <p className="mt-2 text-center text-sm text-zinc-500 dark:text-zinc-400">
            Join thousands of creators and start sharing today.
          </p>
        </div>

        {/* Avatar */}
        <div className="mt-8 flex justify-center">
          <div className="relative">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="Avatar"
              className="h-24 w-24 rounded-full object-cover ring-4 ring-pink-500/20"
            />

            <button
              className="absolute bottom-0 right-0 h-9 w-9 rounded-full bg-linear-to-r from-pink-500 to-purple-600 flex items-center justify-center shadow-lg text-white hover:scale-105 transition"
            >
              <Camera size={18} />
            </button>
          </div>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-4" onSubmit={handleSignup}>

          <div className="relative">
            <User
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
            />
            <input
              type="text"
              placeholder="Username"
              value={
                username
              }
              onChange={(el) => setUsername(el.target.value)}
              className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
            />
            <input
              type="email"
              placeholder="Email address"
              value={
                email
              }
              onChange={(el) => setemail(el.target.value)}
              className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="relative">
            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
            />
            <input
              type="password"
              placeholder="Password"
              value={
                password
              }
              onChange={(el) => setpassword(el.target.value)}
              className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 py-3 pl-11 pr-12 outline-none focus:ring-2 focus:ring-pink-500"
            />

            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400"
            >
              <Eye size={18} />
            </button>
          </div>

          <div className="relative">
            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
            />
            <input
              type="password"
              value={confirm_pass}
              onChange={(el) => setConfirm_pass(el.target.value)}
              placeholder="Confirm Password"
              className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 py-3 pl-11 pr-12 outline-none focus:ring-2 focus:ring-pink-500"
            />

            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400"
            >
              <EyeOff size={18} />
            </button>
          </div>

          <label className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400">
            <input
              type="checkbox"
              className="mt-1 accent-pink-500"
            />
            <span>
              I agree to the{" "}
              <button
                type="button"
                className="text-pink-500 hover:underline"
              >
                Terms
              </button>{" "}
              and{" "}
              <button
                type="button"
                className="text-pink-500 hover:underline"
              >
                Privacy Policy
              </button>
            </span>
          </label>

          <button
            type="submit"
            className="w-full rounded-xl bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 py-3 font-semibold text-white shadow-lg hover:opacity-90 transition"
          >
            Create Account
          </button>

        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-zinc-300 dark:bg-zinc-700" />
          <span className="text-xs text-zinc-400 uppercase">or</span>
          <div className="h-px flex-1 bg-zinc-300 dark:bg-zinc-700" />
        </div>

        <button className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 py-3 font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
          Continue with Google
        </button>

        <p className="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
          Already have an account?
          <button className="ml-2 font-semibold text-pink-500 hover:underline" type="button" onClick={() => navigate("/")}>
            Sign In
          </button>
        </p>

      </div>
    </div>
  );
}