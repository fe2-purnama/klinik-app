import React, { useState } from "react";
import Logout from "./../assets/logout.png";
import { Link, useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Modal, Button } from "flowbite-react";

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
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/Login");
  };

  return (
    <>
      <aside className="fixed lg:relative h-full px-3 py-4 bg-white border-e-2">
        <ul className="flex flex-col justify-between h-full space-y-2 font-medium w-44">
          <ul className="flex flex-col gap-2">
            <CustomLink to="/">
              <i className="fal fa-home fa-lg"></i>
              <p className="text-sm text-nowrap px-2">Beranda</p>
            </CustomLink>
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
              <p className="text-sm text-nowrap px-2">Profil</p>
            </CustomLink>
          </ul>
          <li>
            <button
              onClick={() => setOpenModal(true)}
              className="flex w-full items-center py-2 px-4 text-gray-900 rounded-lg hover:bg-blue-100 mt-40"
            >
              <img src={Logout} className="w-6 h-6" alt="Logout" />
              <span className="px-2">Logout</span>
            </button>
          </li>
        </ul>
      </aside>

      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Apakah kamu yakin untuk Logout?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleLogout}>
                Ya, Logout
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Tidak
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
