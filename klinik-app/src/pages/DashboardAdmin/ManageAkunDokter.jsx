/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Sidebar from "../../components/SidebarAdmin/Sidebar";
import TableDokter from "../../components/TableDokter/TableDokter";
import HeaderAdmin from "../../components/HeaderAdmin/HeaderAdmin";

const DashboardAdmin = () => {
  return (
    <section className="h-full w-full p-5">
      <div className="py-4">
        <h1 className="text-2xl font-medium mb-5">Manage Akun Dokter</h1>
      </div>
      <TableDokter />
    </section>
  );
};

export default DashboardAdmin;
