/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

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
    <aside
      className={`h-screen px-3 py-4 bg-white flex-col border-e-2 lg:flex z-20 ${
        isShow ? "absolute" : "hidden"
      }`}
    >
      <ul className="flex flex-col justify-between h-full space-y-2 font-medium flex-1">
        <li>
          <div className="logo flex items-center mb-8">
            <img src={Logo} alt="Klinik Prima" className="h-12" />
            <h1 className="sm:text-sm md:text-lg lg:text-xl xl:text-2xl ml-2">
              <span className="text-[color:var(--primary)] font-semibold">
                Klinik
              </span>
              <span className="text-[color:var(--other)] font-semibold">
                Prima
              </span>
            </h1>
          </div>
          <button
            className={`absolute top-7 right-4 shadow-none bg-white ${
              isShow ? "block" : "hidden"
            }`}
            onClick={handleClick}
          >
            <i className="fal fa-times fa-xl"></i>
          </button>
        </li>
        <div className="flex-1">
          <li className="mb-4">
            <Link
              className="flex items-center p-2 px-4 text-gray-900 rounded-lg hover:bg-blue-100"
              to="/admin"
            >
              <i className="far fa-user-md fa-xl"></i>
              <span className="flex-1 ms-3 whitespace-nowrap">
                Manage Akun Dokter
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center p-2 px-4 text-gray-900 rounded-lg hover:bg-blue-100"
              to="/admin/add"
            >
              <i className="far fa-user-plus fa-xl"></i>
              <span className="flex-1 ms-3 whitespace-nowrap">
                Tambah Akun Dokter
              </span>
            </Link>
          </li>
        </div>
        <li className="mt-auto">
          <Link
            className="flex items-center p-2 px-4 text-gray-900 rounded-lg hover:bg-blue-100"
            to="/Login"
          >
            <i className="far fa-sign-out fa-2xl"></i>
            <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
