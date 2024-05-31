/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/SidebarAdmin/Sidebar";
import TableDokter from "../../components/TableDokter/TableDokter";
import HeaderAdmin from "../../components/HeaderAdmin/HeaderAdmin";

const DashboardAdmin = () => {
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    setIsShow(!isShow);
  };

  return (
    <section className="h-screen flex flex-row">
      <Sidebar Show={isShow} />
      <section className="w-full p-5 z-0">
        <div className="flex flex-row gap-4 border-b-2">
          <a
            className="bg-white p-2 rounded-lg shadow-none cursor-pointer lg:hidden"
            onClick={handleClick}
          >
            <i className="fas fa-bars"></i>
          </a>
          <HeaderAdmin />
        </div>
        <div className="py-4 mt-4">
          <h1 className="text-2xl font-medium mb-5">Manage Akun Dokter</h1>
        </div>
        <div className="h-2/3 overflow-x-auto">
          <TableDokter />
        </div>
      </section>
    </section>
  );
};

export default DashboardAdmin;
