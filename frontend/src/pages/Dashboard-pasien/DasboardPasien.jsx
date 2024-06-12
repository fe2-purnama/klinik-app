/* eslint-disable no-unused-vars */
import React from "react";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";

function DasboardPasien() {
  return (
    <>
      <div className="my-4 h-[600px] px-8 lg:px-14 flex flex-row">
        <aside className="mr-4 border-r-2 hidden lg:block">
          <Sidebar />
        </aside>

        <section className="py-4 w-full lg:p-5 overflow-auto">
          <div className="overflow-x-auto">
            <Outlet />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default DasboardPasien;
