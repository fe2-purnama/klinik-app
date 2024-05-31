/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../../assets/logout.png';
import LogoDokter from '../../assets/logo-doctor.png';
import Logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div>
      <aside className="h-screen px-3 py-4 bg-white flex flex-col">
        <ul className="flex flex-col justify-between h-full space-y-2 font-medium flex-1">
          <li>
            <div className="logo flex items-center mb-8">
              <img src={Logo} alt="Klinik Prima" className="h-12" />
              <h1 className="sm:text-sm md:text-lg lg:text-xl xl:text-2xl ml-2">
                <span className="text-[color:var(--primary)] font-semibold">Klinik </span>
                <span className="text-[color:var(--other)] font-semibold">Prima</span>
              </h1>
            </div>
          </li>
          <div className="flex-1">
            <li className="mb-4">
              <Link className="flex items-center p-2 px-4 text-gray-900 rounded-lg hover:bg-blue-100" to="/manage-akun-dokter">
                <img src={LogoDokter} />
                <span className="flex-1 ms-3 whitespace-nowrap">Manage Akun Dokter</span>
              </Link>
            </li>
            <li>
              <Link className="flex items-center p-2 px-4 text-gray-900 rounded-lg hover:bg-blue-100" to="/tambah-akun-dokter">
                <FontAwesomeIcon icon={faUserPlus} className="fa-xl" />
                <span className="flex-1 ms-3 whitespace-nowrap">Tambah Akun Dokter</span>
              </Link>
            </li>
          </div>
          <li className="mt-auto">
            <Link className="flex items-center p-2 px-4 text-gray-900 rounded-lg hover:bg-blue-100" to="/Login">
              <img src={Logout} />
              <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
