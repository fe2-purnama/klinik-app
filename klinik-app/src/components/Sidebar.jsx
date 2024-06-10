import React from "react";
import Logout from "./../assets/logout.png";
import { Link, useMatch, useLocation, useResolvedPath } from "react-router-dom";

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "bg-blue-100 rounded-lg" : "bg-white"}>
      <Link
        to={to}
        {...props}
        className="flex items-center py-2 px-4 text-gray-900 rounded-lg hover:bg-blue-100"
      >
        {children}
      </Link>
    </li>
  );
}

export default function Component() {
  const location = useLocation();

  return (
    <aside className="h-full px-3 py-4 bg-white">
      <ul className="flex flex-col justify-between h-full space-y-2 font-medium w-44">
        <ul className="flex flex-col gap-2">
          <CustomLink to="/dashboard">
            <i className="fal fa-sort-numeric-down fa-lg"></i>
            <p className="text-sm text-nowrap px-2">Reservasi Anda</p>
          </CustomLink>
          <CustomLink to="/dashboard/review">
            <i className="fal fa-thumbs-up fa-lg"></i>
            <p className="text-sm text-nowrap px-2">Daftar Review</p>
          </CustomLink>
          <CustomLink to="/dashboard/profile-pasien">
            <i className="fal fa-user fa-lg"></i>
            <p className="text-sm text-nowrap px-2">Profile</p>
          </CustomLink>
        </ul>
        <li>
          <a
            href="#"
            className="flex items-center py-2 px-4 text-gray-900 rounded-lg hover:bg-blue-100"
          >
            <img src={Logout} alt="Logout" />
            <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}
