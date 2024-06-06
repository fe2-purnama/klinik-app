/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

const Sidebar = (props) => {
  const { Show } = props;

  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    setIsShow(!isShow);
  };

  useEffect(() => {
    setIsShow(Show);
  }, [Show]);

  return (
    <aside className={`fixed inset-y-0 left-0 z-20 w-64 bg-white border-r-2 lg:relative lg:w-auto lg:flex lg:border-none transition-transform duration-300 ${isShow ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
      <ul className="flex flex-col justify-between h-full space-y-2 font-medium">
        <li>
          <div className="logo flex items-center mb-8 p-4">
            <img src={Logo} alt="Klinik Prima" className="h-12" />
            <h1 className="ml-2 text-xl font-semibold text-[color:var(--primary)]">
              <span>Klinik</span>
              <span className="text-[color:var(--other)]">Prima</span>
            </h1>
          </div>
          <button className={`absolute top-4 right-4 shadow-none bg-white ${isShow ? 'block' : 'hidden'} lg:hidden`} onClick={handleClick}>
            <i className="fal fa-times fa-xl"></i>
          </button>
        </li>
        <div className="flex-1 px-4">
          <li className="mb-4">
            <Link className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-100" to="/admin">
              <i className="far fa-user-md fa-xl"></i>
              <span className="flex-1 ml-3 whitespace-nowrap">Manage Akun Dokter</span>
            </Link>
          </li>
          <li>
            <Link className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-100" to="/admin/add">
              <i className="far fa-user-plus fa-xl"></i>
              <span className="flex-1 ml-3 whitespace-nowrap">Tambah Akun Dokter</span>
            </Link>
          </li>
        </div>
        <li className="mt-auto p-4">
          <Link className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-100" to="/Login">
            <i className="far fa-sign-out fa-2xl"></i>
            <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
