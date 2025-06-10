import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <header className="bg-[#F5F7FA]">
        <div className="max-w-[1440px] h-[135px] mx-auto px-[52px] md:px-8 ">
          <div className="flex items-center justify-between ">
            <Image
              src="/PIC.png"
              alt="MediScan Logo"
              width={333}
              height={132}
              className="h-[132px] w-[333px] object-cover"
            ></Image>
            <div className="">
              <nav className="flex items-center gap-[59px]">
                <a
                  href="/login"
                  className="text-[#013160] text-[25px] font-semibold hover:underline"
                >
                  Cara Kerja
                </a>
                <a
                  href="/register"
                  className="text-[#013160] text-[25px] font-semibold hover:underline"
                >
                  Fitur
                </a>
                <a
                  href="/register"
                  className="text-[#013160] text-[25px] font-semibold hover:underline"
                >
                  Testimoni
                </a>
                <a
                  href="/register"
                  className="text-[#013160] text-[25px] font-semibold hover:underline"
                >
                  Our Team
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
