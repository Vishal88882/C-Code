import { FaInstagram as Instagram } from "react-icons/fa";
import { Mail } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Password_AuthPage() {

    const [username, setUsername] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState("")
    const navigate = useNavigate();

    async function handleRequestCode(e) {
        e.preventDefault();
        setError("");
        setIsSubmitting(true);

        try {
            const response = await fetch("http://localhost:8080/Request_OTP", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ username }),
                credentials: "include"
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Unable to send a reset code.");
            }

            navigate("/change_password", { state: { username } });

        } catch (error) {
            setError(error.message || "Unable to send a reset code.");
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
                            Reset your password
                        </p>
                    </div>

                    <form className="space-y-5" onSubmit={handleRequestCode}>

                        <div className="relative">
                            <Mail
                                size={18}
                                className="absolute left-4 top-4 text-gray-400"
                            />
                            <input
                                name="username"
                                type="text"
                                value={username}
                                autoComplete="username"
                                required
                                placeholder="Username"
                                className="w-full rounded-xl border border-gray-300 bg-gray-50 py-3 pl-12 pr-4 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:bg-zinc-800 dark:border-zinc-700"
                                onChange={(el) => setUsername(el.target.value)}
                            />
                        </div>

                        <button type="submit" disabled={isSubmitting} className="w-full rounded-xl bg-linear-to-r from-pink-500 to-violet-600 py-3 font-semibold text-white transition hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:opacity-60">
                            {isSubmitting ? "Sending..." : "Send reset code"}
                        </button>

                    </form>
                    {error && <p role="alert" className="mt-4 text-center text-sm text-red-600">{error}</p>}

                </div>
            </div>
        </div>
    );
}