import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-[240px] h-full bg-[#AFBCC7] p-6 text-white flex flex-col items-center box-border">
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
        <Link href={"/history"}>
          <li className="text-lg p-3 text-center bg-[#1E88E5] text-white rounded-lg cursor-pointer mb-2 font-bold hover:bg-[#1669c7]">
            History Check Up
          </li>
        </Link>
        <li className="text-lg p-3 text-center bg-[#1E88E5] text-white rounded-lg cursor-pointer mb-2 font-bold hover:bg-[#1669c7]">
          Profile
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
