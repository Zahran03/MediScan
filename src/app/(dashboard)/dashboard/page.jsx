"use client";

import Link from "next/link";
import React from "react";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HomeDashboard() {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     try {
  //       const res = await fetch("/api/auth/me");

  //       if (res.status !== 200) {
  //         router.push("/login");
  //       } else {
  //         setIsChecking(false); // lanjut render dashboard
  //       }
  //     } catch (err) {
  //       router.push("/login");
  //     }
  //   };

  //   checkAuth();
  // }, [router]);

  return (
    <div className="flex h-screen font-[Inter]">
      {/* Sidebar */}
      {/* <div className="w-[240px] h-full bg-[#AFBCC7] p-6 text-white flex flex-col items-center box-border">
        <img
          src="/desain-tanpa-judul-2.png"
          alt="Logo"
          className="w-40 h-auto mb-6"
        />
        <ul className="list-none p-0 w-full">
          <Link
            href={"/dashboard"}
            // className="text-lg p-3 text-center bg-[#1E88E5] text-white rounded-lg cursor-pointer mb-2 font-bold hover:bg-[#1669c7]"
          >
            <li className="text-lg p-3 text-center bg-[#1E88E5] text-white rounded-lg cursor-pointer mb-2 font-bold hover:bg-[#1669c7]">
              Dashboard
            </li>
          </Link>
          <Link
            href={"/prediksi"}
            // className="text-lg p-3 text-center bg-[#1E88E5] text-white rounded-lg cursor-pointer mb-2 font-bold hover:bg-[#1669c7]"
          >
            <li className="text-lg p-3 text-center bg-[#1E88E5] text-white rounded-lg cursor-pointer mb-2 font-bold hover:bg-[#1669c7]">
              Prediksi
            </li>
          </Link>
          <li className="text-lg p-3 text-center bg-[#1E88E5] text-white rounded-lg cursor-pointer mb-2 font-bold hover:bg-[#1669c7]">
            History Check Up
          </li>
          <li className="text-lg p-3 text-center bg-[#1E88E5] text-white rounded-lg cursor-pointer mb-2 font-bold hover:bg-[#1669c7]">
            Profile
          </li>
        </ul>
      </div> */}

      <Sidebar />

      {/* Konten utama: Selamat Datang 
      {isChecking ? (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-lg text-gray-700">Memeriksa otentikasi...</p>
        </div>
      ) : null}
      */}

      {/* Konten Selamat Datang */}
      <div className="flex-1 flex flex-col items-center justify-center text-center bg-[#13273C] p-[50px] box-border relative">
        <div className="absolute top-[30px] right-[40px] text-lg font-bold text-white">
          <p>Admin</p>
          <button
            onClick={async () => {
              await fetch("/api/auth/logout", { method: "POST" });
              window.location.href = "/login";
            }}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        <div className="absolute w-[79.6%] h-[2px] bg-white top-[65px] opacity-60"></div>
        <h1 className="text-white text-2xl md:text-3xl font-bold mb-6">
          Selamat Datang di Aplikasi Mediscan!
        </h1>
        <Link href={"/prediksi"}>
          <button className="bg-[#007BFF] text-white py-3 px-6 text-lg font-bold rounded-lg hover:bg-[#0056b3]">
            Mulai Check Up
          </button>
        </Link>
      </div>
    </div>
  );
}
