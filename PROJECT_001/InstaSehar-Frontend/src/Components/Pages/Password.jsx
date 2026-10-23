import { FaInstagram as Instagram } from "react-icons/fa";
import { Mail, Lock, Key } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function PasswordPage({ onLogin }) {

  const location = useLocation();
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [username, setUsername] = useState(location.state?.username || "")
  const [otp, setOtp] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate();

  async function handlePasswordReset(e) {
    e.preventDefault();
    setError("");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("http://localhost:8080/change_password", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ username, new_password: newPassword, otp }),
        credentials: "include"
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Authentication failed.");
      }

      onLogin(data.user);
      navigate("/home", { replace: true });

    } catch (error) {
      setError(error.message || "Unable to update your password.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-100 via-white to-violet-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-black flex items-center justify-center px-4">
      <div className="w-full max-w-5xl grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-zinc-900">

        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-between bg-linear-to-br from-pink-500 via-purple-500 to-indigo-500 p-12 text-white relative overflow-hidden">

          <div className="absolute -top-16 -left-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <Instagram size={50} />
            <h1 className="text-5xl font-bold mt-6">
              Connect.
              <br />
              Share.
              <br />
              Inspire.
            </h1>

            <p className="mt-6 text-white/80 text-lg leading-relaxed">
              Discover amazing creators and connect with your friends in one
              beautiful place.
            </p>
          </div>

          <div className="relative flex gap-3">
            <img
              src="https://i.pravatar.cc/60?img=1"
              className="rounded-full border-4 border-white"
            />
            <img
              src="https://i.pravatar.cc/60?img=2"
              className="rounded-full border-4 border-white -ml-4"
            />
            <img
              src="https://i.pravatar.cc/60?img=3"
              className="rounded-full border-4 border-white -ml-4"
            />
            <span className="ml-4 text-white/80 self-center">
              Join 50k+ creators
            </span>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 md:p-14">

          <div className="text-center mb-10">
            <Instagram
              className="mx-auto text-pink-500"
              size={42}
            />

            <p className="text-gray-500 mt-2">
              Enter the reset code sent to your email. It expires in 10 minutes.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handlePasswordReset}>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                name="username"
                type="text"
                value={username}
                placeholder="Username"
                autoComplete="username"
                required
                className="w-full rounded-xl border border-gray-300 bg-gray-50 py-3 pl-12 pr-4 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:bg-zinc-800 dark:border-zinc-700"
                onChange={(el) => setUsername(el.target.value)}
              />
            </div>

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                name="new password"
                type="password"
                value={newPassword}
                placeholder="New Password"
                autoComplete="new-password"
                minLength={8}
                required
                className="w-full rounded-xl border border-gray-300 bg-gray-50 py-3 pl-12 pr-4 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:bg-zinc-800 dark:border-zinc-700"
                onChange={(el) => setNewPassword(el.target.value)}
              />
            </div>
            <div className="relative">
              <Lock
                size={18}
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                name="confirm_password"
                type="password"
                value={confirmPassword}
                placeholder="Confirm New Password"
                autoComplete="new-password"
                minLength={8}
                required
                className="w-full rounded-xl border border-gray-300 bg-gray-50 py-3 pl-12 pr-4 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:bg-zinc-800 dark:border-zinc-700"
                onChange={(el) => setConfirmPassword(el.target.value)}
              />
            </div>
            <div className="relative">
              <Key
                size={18}
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                name="otp"
                type="text"
                value={otp}
                placeholder="4-digit reset code"
                inputMode="numeric"
                pattern="[0-9]{4}"
                maxLength={4}
                autoComplete="one-time-code"
                required
                className="w-full rounded-xl border border-gray-300 bg-gray-50 py-3 pl-12 pr-4 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:bg-zinc-800 dark:border-zinc-700"
                onChange={(el) => setOtp(el.target.value)}
              />
            </div>

            {error && <p role="alert" className="text-sm text-red-600">{error}</p>}

            <button disabled={isSubmitting} className="w-full rounded-xl bg-linear-to-r from-pink-500 to-violet-600 py-3 font-semibold text-white transition hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:opacity-60">
              {isSubmitting ? "Updating..." : "Update password"}
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}