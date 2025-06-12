"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async () => {
    setError("");
    setSuccess("");

    if (!username || !password || !confirmPassword) {
      setError("Semua field wajib diisi.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password dan konfirmasi tidak sama.");
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Gagal register.");
      } else {
        setSuccess("Registrasi berhasil!");
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        router.push("/login");
      }
    } catch (err) {
      setError("Terjadi kesalahan saat registrasi.");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#F5F7FA]">
      {/* Logo */}
      <div className="mb-8">
        <Image src="/PIC.png" alt="MediScan Logo" width={411} height={178} />
      </div>

      {/* Register Box */}
      <div className="bg-[#3da8f5] p-8 rounded-2xl w-80 shadow-md text-white">
        <h2 className="text-center text-lg font-bold mb-4">Register</h2>

        <div className="mb-3">
          <label htmlFor="username" className="block mb-1 text-sm">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 rounded-md text-black bg-gray-200 focus:outline-none"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="block mb-1 text-sm">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 rounded-md text-black bg-gray-200 focus:outline-none"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="block mb-1 text-sm">
            Konfirmasi Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 rounded-md text-black bg-gray-200 focus:outline-none"
          />
        </div>

        {error && <p className="text-sm text-red-200 mb-2">{error}</p>}
        {success && <p className="text-sm text-green-200 mb-2">{success}</p>}

        <button
          onClick={handleRegister}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md shadow-md"
        >
          Register
        </button>
      </div>
    </main>
  );
}
