"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full bg-[#2EA1DF]">
      <section className="max-w-[1440px] h-[531px] mx-auto px-[52px] items-center ">
        <div className="w-full flex justify-between items-center ">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-[45px] font-bold leading-tight mb-4">
              Prediksi Penyakit dan Monitoring <br />
              <span className="bg-[#0E4E8A] text-white px-2 py-1 rounded-3xl">
                Kesehatan Harian Anda
              </span>
            </h1>
            <p className="mb-6 text-base sm:text-lg">
              Solusi digital untuk prediksi risiko diabetes, hipertensi, dan
              penyakit jantung hanya dari rumah
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register">
                <button className="bg-[#FFF155] text-black font-semibold px-6 py-3 rounded hover:bg-yellow-300 transition">
                  Mulai Prediksi
                </button>
              </Link>
              <Link href="/tentang">
                <button className="bg-[#FFF155] text-blue-700 font-semibold px-6 py-3 rounded hover:bg-yellow-200 transition">
                  Pelajari Lebih Lanjut
                </button>
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="">
            <Image
              src="/hero-image.png"
              alt="Ilustrasi Dokter dan Pasien"
              width={500}
              height={500}
              className="w-[507px] h-[507px] object-cover"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
