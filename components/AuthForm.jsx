'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { Mail, Lock, User, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function AuthForm({ mode }) {
  const isRegister = mode === "register";
  const { register, login } = useAuth();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      if (isRegister) {
        await register(name, email, password);
      } else {
        await login(email, password);
      }
      router.push("/dashboard");
    } catch (err) {
      setError(friendlyError(err?.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Brand panel */}
      <div
        className="hidden lg:flex relative flex-col justify-between p-12 overflow-hidden"
        style={{ background: "#0a0a12" }}
      >
        <div
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(96,165,250,0.5), rgba(192,132,252,0.3), transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.4), transparent 70%)",
          }}
        />

        <div className="relative z-10">
          <Link href="/" className="text-xl font-bold" style={{ color: "#ffffff" }}>
            Nova<span style={{ color: "#c084fc" }}>Glide</span>
          </Link>
        </div>

        <div className="relative z-10 max-w-sm">
          <h2
            className="text-3xl font-bold leading-tight mb-4"
            style={{ color: "#ffffff" }}
          >
            One person plans it and builds it.
          </h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "#b8b8c8" }}>
            The person you talk to is the person who builds it. No layers in between.

            You get one developer, fully accountable, start to finish.

            Skip the pipeline. Work straight with the builder.

            Real access to real work. No relay team, no runaround.

            One person. Full accountability. Zero handoffs.
          </p>

          <ul className="flex flex-col gap-3">
            {[
              "Describe your idea in plain language",
              "Get a realistic scope and timeline",
              "Own the code, no lock-in",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs font-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, #60a5fa, #c084fc, #f472b6)",
                    color: "#0a0a12",
                  }}
                >
                  ✓
                </span>
                <span className="text-sm" style={{ color: "#d4d4e0" }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="relative z-10 text-xs" style={{ color: "#6b6b7d" }}>
          © {new Date().getFullYear()} NovaGlide Tech Solutions
        </p>
      </div>

      {/* Form panel */}
      <div
        className="flex items-center justify-center px-4 sm:px-6 py-16 sm:py-24"
        style={{ background: "#0a0a12" }}
      >
        <div className="w-full max-w-md">
          <Link
            href="/"
            className="lg:hidden text-lg font-bold mb-10 inline-block"
            style={{ color: "#ffffff" }}
          >
            Nova<span style={{ color: "#c084fc" }}>Glide</span>
          </Link>

          <h1
            className="text-2xl sm:text-3xl font-bold mb-2"
            style={{ color: "#ffffff" }}
          >
            {isRegister ? "Create your account" : "Welcome back"}
          </h1>
          <p className="text-sm mb-8" style={{ color: "#9999ab" }}>
            {isRegister
              ? "Tell us who you are so we can get your project started."
              : "Log in to see your request status."}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {isRegister && (
              <div>
                <label
                  className="block text-xs font-medium mb-1.5"
                  style={{ color: "#9999ab" }}
                >
                  Full name
                </label>
                <div className="relative">
                  <User
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2"
                    style={{ color: "#6b6b7d" }}
                  />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl pl-11 pr-4 py-3 text-sm outline-none transition-colors"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#ffffff",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "rgba(192,132,252,0.6)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                    }
                    placeholder="Nova Glide"
                  />
                </div>
              </div>
            )}

            <div>
              <label
                className="block text-xs font-medium mb-1.5"
                style={{ color: "#9999ab" }}
              >
                Email
              </label>
              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                  style={{ color: "#6b6b7d" }}
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl pl-11 pr-4 py-3 text-sm outline-none transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#ffffff",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(192,132,252,0.6)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                  }
                  placeholder="myapp@gmail.com"
                />
              </div>
            </div>

            <div>
              <label
                className="block text-xs font-medium mb-1.5"
                style={{ color: "#9999ab" }}
              >
                Password
              </label>
              <div className="relative">
                <Lock
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                  style={{ color: "#6b6b7d" }}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl pl-11 pr-11 py-3 text-sm outline-none transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#ffffff",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(192,132,252,0.6)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                  }
                  placeholder="At least 6 characters"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                  style={{ color: "#6b6b7d" }}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-sm" style={{ color: "#f87171" }}>
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-opacity disabled:opacity-50"
              style={{
                color: "#ffffff",
                background:
                  "linear-gradient(90deg, #60a5fa, #c084fc, #f472b6)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {loading ? (
                "Please wait..."
              ) : (
                <>
                  {isRegister ? "Create account" : "Log in"}
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          <p className="text-sm text-center mt-6" style={{ color: "#9999ab" }}>
            {isRegister ? (
              <>
                Already have an account?{" "}
                <Link href="/login" style={{ color: "#c084fc" }}>
                  Log in
                </Link>
              </>
            ) : (
              <>
                Don&apos;t have an account?{" "}
                <Link href="/register" style={{ color: "#c084fc" }}>
                  Register
                </Link>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

function friendlyError(code) {
  switch (code) {
    case "auth/email-already-in-use":
      return "That email is already registered. Try logging in instead.";
    case "auth/invalid-email":
      return "That email address doesn't look right.";
    case "auth/weak-password":
      return "Password should be at least 6 characters.";
    case "auth/invalid-credential":
    case "auth/wrong-password":
    case "auth/user-not-found":
      return "Incorrect email or password.";
    default:
      return "Something went wrong. Please try again.";
  }
}