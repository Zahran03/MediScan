import Link from "next/link.js";
import Button from "./Button.jsx";

export default function Card({ title, page, image, description }) {
  return (
    <div className="w-[225px] bg-[#bed9f1] p-8 rounded-xl shadow-md text-center flex flex-col items-center transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-[220px] h-[110px] mb-4 object-contain"
      />
      <h3 className="text-lg font-bold mb-3 text-[#13273c]">{title}</h3>
      <div className="w-[90%] h-[2px] bg-black opacity-80 mb-2"></div>
      <div className="flex flex-col items-center justify-center w-full gap-2">
        <p className="text-sm text-[#333] mb-2 text-left max-w-[200px]">
          {description}
        </p>
        <Link href={page}>
          <Button text="Mulai Prediksi" />
        </Link>
      </div>
    </div>
  );
}
