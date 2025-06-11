import React from "react";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import Link from "next/link.js";
import Sidebar from "../components/Sidebar.jsx";

export default function Home() {
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
              History Check Up
            </li>
          </Link>
          <li className="text-lg p-3 text-center bg-[#1E88E5] text-white rounded-lg cursor-pointer mb-2 font-bold hover:bg-[#1669c7]">
            Check Up
          </li>
          <li className="text-lg p-3 text-center bg-[#1E88E5] text-white rounded-lg cursor-pointer mb-2 font-bold hover:bg-[#1669c7]">
            Profile
          </li>
        </ul>
      </div> */}
      <Sidebar />

      {/* Konten utama */}
      <div className="flex-1 p-12 bg-[#13273c] text-white relative box-border">
        <div className="absolute top-5 right-8 text-lg font-bold">Admin</div>
        <div className="w-full h-[2px] bg-white opacity-60 my-4"></div>

        <div className="grid grid-cols-3 gap-6 justify-center mt-16">
          <Card
            title="Prediksi Diabetes"
            page="/prediksi/diabetes"
            image="/DIABETES.png"
            description="Prediksi diabetes menggunakan model AI"
          />
          <Card
            title="Prediksi Hipertensi"
            page="/prediksi/hipertensi"
            image="/Hipertensi.png"
            description="Analisis risiko hipertensi secara otomatis"
          />
          <Card
            title="Prediksi Penyakit Jantung"
            page="/prediksi/jantung"
            image="/jantung.png"
            description="Deteksi dini risiko penyakit jantung"
          />
        </div>
      </div>
    </div>
  );
}
