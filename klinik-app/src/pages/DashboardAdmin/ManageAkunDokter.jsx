import React, { useState } from "react";
import TableDokter from "../../components/TableDokter/TableDokter";

const DashboardAdmin = () => {
  return (
    <section className="px-10 py-5 h-2/3">
      <h1 className="text-2xl font-medium py-5">Manage Akun Dokter</h1>
      <label>Cari Dokter</label>
      <input
        type="text"
        placeholder="ID dokter"
        className="bg-gray-50 mx-3 mb-6 rounded-lg p-2 border-1 focus:border-sky-500 focus:ring-sky-500"
      />
      <div className="h-full overflow-auto">
        <TableDokter />
      </div>
    </section>
  );
};

export default DashboardAdmin;
