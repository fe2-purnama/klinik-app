/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import Sidebar from '../../components/SidebarAdmin/Sidebar';
import TableDokter from '../../components/TableDokter/TableDokter';
import HeaderAdmin from '../../components/HeaderAdmin/HeaderAdmin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const DashboardAdmin = () => {
  return (
    <div>
      <div className="my-4 h-[700px] px-14 flex flex-row">
        <aside className="w-1/5 mr-4 border-r-2 hidden lg:block">
          <Sidebar />
        </aside>

        <section className="w-full">
          <HeaderAdmin />
          <div className="py-4 lg:p-5 mt-2">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-5">
              <h1 className="text-2xl font-medium mb-4 lg:mb-0">Manage Akun Dokter</h1>
              <form className="w-full lg:w-auto flex-grow lg:flex-grow-0">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <FontAwesomeIcon className="text-slate-500" icon={faMagnifyingGlass} />
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Cari Dokter"
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute end-2.5 bottom-2.5 bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-sky-500 dark:hover:bg-sky-600 dark:focus:ring-sky-500"
                  >
                    Cari
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="h-4/5 overflow-y-auto z-0">
            <TableDokter />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardAdmin;
