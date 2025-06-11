import React from "react";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";

export default function Home() {
  return (
    <div className="flex h-screen font-[Inter]">
      {/* Sidebar */}
      <div className="w-[200px] h-[100dvh] bg-[#AFBCC7] p-6 text-white">
        <img
          src="/desain-tanpa-judul-2.png"
          alt="Logo"
          className="w-[160px] h-auto mb-6"
        />
        <ul className="list-none p-0">
          <li className="text-lg p-3 text-center bg-blue-600 text-white rounded-lg cursor-pointer mb-3 font-bold hover:bg-blue-700">
            History Check
          </li>
          <li className="text-lg p-3 text-center bg-blue-600 text-white rounded-lg cursor-pointer mb-3 font-bold hover:bg-blue-700">
            Check Up
          </li>
          <li className="text-lg p-3 text-center bg-blue-600 text-white rounded-lg cursor-pointer mb-3 font-bold hover:bg-blue-700">
            Profile
          </li>
        </ul>
      </div>

      {/* Konten utama */}
      <div className="flex-1 p-12 bg-[#13273c] text-white relative box-border">
        <div className="absolute top-5 right-8 text-lg font-bold">Admin</div>
        <div className="w-full h-[2px] bg-white opacity-60 my-4"></div>

        <div className="grid grid-cols-3 gap-6 justify-center mt-16">
          <Card
            title="Prediksi Diabetes"
            image="/DIABETES.png"
            description="Prediksi diabetes menggunakan model AI"
          />
          <Card
            title="Prediksi Hipertensi"
            image="/Hipertensi.png"
            description="Analisis risiko hipertensi secara otomatis"
          />
          <Card
            title="Prediksi Penyakit Jantung"
            image="/jantung.png"
            description="Deteksi dini risiko penyakit jantung"
          />
        </div>
      </div>
    </div>
  );
}
