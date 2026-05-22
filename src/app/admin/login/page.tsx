"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Zap, LogIn, AlertCircle } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        setError("Invalid username or password");
        setLoading(false);
        return;
      }

      router.push("/admin");
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-white">
            <Zap className="h-7 w-7" />
          </div>
          <h1 className="text-2xl font-bold text-white">TechForge Admin</h1>
          <p className="mt-1 text-sm text-[#9694b8]">
            Sign in to manage your site content
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-[#2d2a47] bg-[#1e1a3a] p-8"
        >
          {error && (
            <div className="mb-4 flex items-center gap-2 rounded-lg bg-red-500/10 p-3 text-sm text-red-400">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="mb-2 block text-sm font-medium text-[#b8b5d6]"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full rounded-lg border border-[#2d2a47] bg-[#141029] px-4 py-3 text-sm text-white placeholder-[#6b6890] transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Enter username"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-[#b8b5d6]"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-lg border border-[#2d2a47] bg-[#141029] px-4 py-3 text-sm text-white placeholder-[#6b6890] transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Enter password"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:opacity-50"
          >
            <LogIn className="h-4 w-4" />
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
