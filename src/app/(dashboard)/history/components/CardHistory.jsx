import Link from "next/link";
import React from "react";
import Button from "../../components/Button";

const CardHistory = ({ title, createdAt, id }) => {
  return (
    <div className="xl:w-[281px] w-[200px] bg-[#BED9F1] rounded-lg">
      <div className="xl:p-7 p-4 ">
        <h2 className="text-lg font-bold mb-2 text-black mt-4">{title}</h2>
        <hr className="w-full mb-3 text-black" />
        <p className="text-sm text-black mb-[43px]">Created At: {createdAt}</p>
        <Link href={`/history/${id}`}>
          <button className="w-full bg-[#3191E6] xl:px-5 py-2.5 xl:px-2 py-0.5 rounded-lg">
            Selengkap nya
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardHistory;
