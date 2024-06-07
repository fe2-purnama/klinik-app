import React from "react";
import Logout from "./../assets/logout.png";
import { Link } from "react-router-dom";

export default function Component() {
  return (
    <>
      <aside className="h-full px-3 py-4 bg-white">
        <ul className="flex flex-col justify-between h-full space-y-2 font-medium w-44">
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                to="/dashboard"
                className="flex items-center py-2 px-4 text-gray-900 rounded-lg hover:bg-blue-100"
              >
                <i className="fal fa-sort-numeric-down fa-lg"></i>
                <p className="text-sm text-nowrap px-2">Reservasi Anda</p>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/profile-pasien"
                className="flex items-center py-2 px-4 text-gray-900 rounded-lg hover:bg-blue-100"
              >
                <i className="fal fa-user fa-lg"></i>
                <p className="text-sm text-nowrap px-2">Profile</p>
              </Link>
            </li>
          </ul>
          <li>
            <a
              href="#"
              className="flex items-center py-2 px-4 text-gray-900 rounded-lg hover:bg-blue-100"
            >
              <img src={Logout} />
              <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
