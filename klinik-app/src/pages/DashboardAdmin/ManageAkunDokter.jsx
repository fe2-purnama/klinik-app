/* eslint-disable no-unused-vars */
import React from 'react';
import Sidebar from '../../components/SidebarAdmin/Sidebar';
import TableDokter from '../../components/TableDokter/TableDokter';
import HeaderAdmin from '../../components/HeaderAdmin/HeaderAdmin';

const DashboardAdmin = () => {
  return (
    <div>
      <div className="my-4 h-[700px] px-14 flex flex-row">
        <aside className=" w-1/5 mr-4  border-r-2 hidden lg:block">
          <Sidebar />
        </aside>

        <section className="w-full">
          <HeaderAdmin />
          <div className="py-4 lg:w-4/5 lg:p-5 mt-4">
            <h1 className="text-2xl font-medium mb-5">Manage Akun Dokter</h1>
          </div>
          <div className=" h-4/5 overflow-y-auto z-0">
            <TableDokter />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardAdmin;