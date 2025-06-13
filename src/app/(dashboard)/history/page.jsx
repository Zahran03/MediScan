"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import CardHistory from "./components/CardHistory";

const Page = () => {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await fetch("/api/history_prediksi");
        const data = await res.json();

        if (res.ok) {
          setHistoryData(data);
        } else {
          console.error("Gagal mengambil data history:", data.error);
        }
      } catch (err) {
        console.error("Terjadi kesalahan saat fetch:", err);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="flex h-screen font-[Inter]">
      <Sidebar />
      <div className="flex-1 p-12 bg-[#13273c] text-white box-border justify-center items-center">
        <div className="absolute top-5 right-8 text-lg font-bold">Admin</div>
        <div className="w-full h-[2px] bg-white opacity-60 my-4"></div>
        <div className="w-full flex items-center justify-between flex-wrap">
          {historyData.length === 0 ? (
            <p className="text-center w-full">Belum ada data history</p>
          ) : (
            historyData.map((item, index) => (
              <CardHistory
                key={item.id} // pastikan field id ada di tabel
                title={`History ${index + 1}`}
                createdAt={new Date(item.created_at).toLocaleDateString(
                  "id-ID",
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }
                )}
                id={item.id}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
