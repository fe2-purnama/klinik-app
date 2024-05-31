// import { Outlet, useLocation } from 'react-router-dom';
// import DokterHeader from './Header/HeaderDokter';
// import DokterSidebar from './Sidebar/SidebarDokter';
// import './Style.css';

// const DoctorDashboard = () => {
//    const doctorName = "Dr. Eka Prasetyo, Sp.JP";
//    const location = useLocation();

//    return (
//       <div className="flex h-screen bg-gray-200">
//          <div className="flex flex-1">
//             <DokterSidebar currentPath={location.pathname} />
//             <div className="flex flex-col flex-1 overflow-hidden">
//                <DokterHeader doctorName={doctorName} />
//                <div className="p-8 mt-16">
//                   asd
//                   <Outlet />
//                </div>
//             </div>
//          </div>
//       </div>
//    );
// };

// export default DoctorDashboard;


import React from 'react';

const DoctorDashboard = () => {
    return (
        <div>
            <h2>Dashboard</h2>
            {/* Isi konten halaman Dashboard di sini */}
        </div>
    );
};

export default DoctorDashboard;

