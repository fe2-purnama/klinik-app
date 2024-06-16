import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/SidebarAdmin/Sidebar';
import { Outlet } from 'react-router-dom';
import HeaderAdmin from '../../components/HeaderAdmin/HeaderAdmin';
import { Spinner } from 'flowbite-react';

function AdminLayout() {
  const [isShow, setIsShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = () => {
    setIsShow(!isShow);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner size="xl" aria-label="Loading spinner" />
      </div>
    );
  }

  return (
    <section className="h-full sm:h-screen w-full flex flex-row bg-slate-200">
      <Sidebar Show={isShow} />
      <section className="h-full w-full">
        <div className="flex flex-row items-center px-5 py-2 gap-4 border-b-4 border-[color:var(--primary)] sticky top-0 bg-white z-10">
          <a className="bg-white p-2 rounded-lg shadow-none cursor-pointer lg:hidden" onClick={handleClick}>
            <i className="fas fa-bars"></i>
          </a>
          <HeaderAdmin />
        </div>
        <Outlet />
      </section>
    </section>
  );
}

export default AdminLayout;
