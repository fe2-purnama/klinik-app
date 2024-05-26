import React from "react";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import Footer from "../components/Footer/Footer";

function DasboardPasien() {
  return (
    <>
      <div className="h-screen my-4 px-14 flex flex-row">
        <aside className=" w-1/5 mr-4  border-r-2 hidden lg:block">
          <Sidebar />
        </aside>

        <section className="w-full py-4 lg:w-4/5 lg:p-5">
          <h1 className="text-2xl font-semibold mb-5">Daftar Reservasi Anda</h1>
          <Table />
        </section>
      </div>

      <Footer />
    </>
  );
}

export default DasboardPasien;
