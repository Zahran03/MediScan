import React from "react";
import Sidebar from "../components/Sidebar";
import CardHistory from "./components/CardHistory";

const page = () => {
  return (
    <div className="flex h-screen font-[Inter]">
      <Sidebar />
      <div className="flex-1 p-12 bg-[#13273c] text-white box-border justify-center items-center">
        <div className="absolute top-5 right-8 text-lg font-bold">Admin</div>
        <div className="w-full h-[2px] bg-white opacity-60 my-4"></div>
        <div className="w-full flex items-center justify-between flex-wrap">
          <CardHistory
            title={"Monitoring 1"}
            createdAt={"21 April 2025"}
            id={1}
          />
          <CardHistory
            title={"Monitoring 1"}
            createdAt={"21 April 2025"}
            id={1}
          />
          <CardHistory
            title={"Monitoring 1"}
            createdAt={"21 April 2025"}
            id={1}
          />
          <CardHistory
            title={"Monitoring 1"}
            createdAt={"21 April 2025"}
            id={1}
          />
          <CardHistory
            title={"Monitoring 1"}
            createdAt={"21 April 2025"}
            id={1}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
