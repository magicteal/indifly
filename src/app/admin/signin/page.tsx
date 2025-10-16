"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function AdminSignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) {
      router.push("/admin");
    } else {
      const msg = await res.text();
      setError(msg || "Invalid credentials");
    }
  };

  return (
    <div className="grid min-h-[60vh] place-items-center px-4 text-black">
      <form onSubmit={onSubmit} className="w-full max-w-sm space-y-4">
        <div>
          <label className="mb-1 block text-sm">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded border bg-transparent px-3 py-2 text-black"
            required
          />
        </div>
        <div>
          <label className="mb-1 block text-sm">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded border bg-transparent px-3 py-2 text-black"
            required
          />
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
        <button
          type="submit"
          className="w-full rounded bg-primary py-2 text-primary-foreground"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
