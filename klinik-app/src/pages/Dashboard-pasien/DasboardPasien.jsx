/* eslint-disable no-unused-vars */
import React from "react";
import Sidebar from "../../components/Sidebar";
import Table from "../../components/Table";
import Footer from "../../components/Footer/Footer";

function DasboardPasien() {
  return (
    <>
      <div className="my-4 h-[600px] px-14 flex flex-row">
        <aside className="mr-4 border-r-2 hidden lg:block">
          <Sidebar />
        </aside>

        <section className="py-4 w-full lg:p-5 overflow-auto">
          <h1 className="text-2xl font-semibold mb-5">Daftar Reservasi Anda</h1>
          <div className="h-4/5 overflow-x-auto">
            <Table />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default DasboardPasien;
