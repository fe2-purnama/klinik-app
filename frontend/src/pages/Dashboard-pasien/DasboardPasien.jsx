/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";
import brand from "../../assets/brand.png";

function DasboardPasien() {
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    setIsShow(!isShow);
  };

  return (
    <section className="my-4 px-8 lg:px-14 h-[85vh] w-full">
      <div className="py-2 px-2 md:px-4 border-b-4 border-sky-400 mb-6 flex flex-row items-center gap-4">
        <a
          className="bg-white p-2 rounded-lg shadow-none cursor-pointer lg:hidden"
          onClick={handleClick}
        >
          <i className="fas fa-bars"></i>
        </a>
        <img src={brand} className="h-10" />
        <h1 className="text-lg hidden md:block">Dashboard Pasien</h1>
      </div>
      <section className="flex flex-row h-full">
        <div
          className={`transition-all z-10 ${
            isShow ? "block" : "hidden lg:block"
          }`}
        >
          <Sidebar />
        </div>
        <div className="overflow-x-auto px-4 md:px-10 w-full z-0">
          <Outlet />
        </div>
      </section>
    </section>
  );
}

export default DasboardPasien;
