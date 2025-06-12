"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      alert("Login berhasil!");
      router.push("/dashboard"); // Ganti sesuai kebutuhan kamu
    } else {
      alert("Login gagal: " + data.message);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#F5F7FA]">
      {/* Logo */}
      <div className="mb-8">
        <Image
          src="/PIC.png"
          alt="MediScan Logo"
          width={411}
          height={178}
          className=""
        />
      </div>

      {/* Login Box */}
      <form
        onSubmit={handleSubmit}
        className="bg-[#3da8f5] p-8 rounded-2xl w-80 shadow-md text-white"
      >
        <h2 className="text-center text-lg font-bold mb-6">LOGIN</h2>

        <div className="mb-4">
          <label htmlFor="username" className="block mb-1 text-sm">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={form.username}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md text-black bg-gray-200 focus:outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 text-sm">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md text-black bg-gray-200 focus:outline-none"
            required
          />
        </div>

        <div className="text-sm text-blue-200 mb-4 text-left">
          <a href="#" className="hover:underline">
            Lupa Password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md shadow-md"
          disabled={loading}
        >
          {loading ? "Memproses..." : "Login"}
        </button>
      </form>
    </main>
  );
}
