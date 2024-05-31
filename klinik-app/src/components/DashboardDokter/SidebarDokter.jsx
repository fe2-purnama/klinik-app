import React, { createContext, useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, LogOut, LayoutDashboard, UserRound, Text } from 'lucide-react';
import Brand from '../../assets/brand.png';
import DoctorHeader from './HeaderDokter';
import DoctorDashboard from '../../pages/Dashboard-dokter/DashboardDokter';
import DaftarAntrian from '../../pages/Dashboard-dokter/DaftarAntrian';
import ReviewDokter from '../../pages/Dashboard-dokter/ReviewDokter';

const SidebarContext = createContext();

export default function DoctorSidebar() {
    const [expanded, setExpanded] = useState(true);
    const location = useLocation();

    const doctorName = "Dr. Eka Prasetyo, Sp.JP";

    const renderContent = () => {
        switch (location.pathname) {
            case '/dashboard-dokter':
                return <DoctorDashboard />;
            case '/dashboard-dokter/daftar-antrian':
                return <DaftarAntrian />;
            case '/dashboard-dokter/review-dokter':
                return <ReviewDokter />;
            default:
                return null;
        }
    };

    return (
        <>
            <div className="flex h-screen bg-gray-200">
                <div className="flex flex-1">
                    {/* Sidebar */}
                    <aside className="h-screen">
                        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                            <div className="p-4 pb-2 flex justify-between items-center">
                                <img src={Brand} className={`overflow-hidden transition-all ${expanded ? "w-30" : "w-0"}`} alt="" />
                                <button onClick={() => setExpanded((curr) => !curr)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                                    {expanded ? <Menu /> : <Menu />}
                                </button>
                            </div>

                            <SidebarContext.Provider value={{ expanded }}>
                                <ul className="flex-1 px-3">
                                    <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" to="/dashboard-dokter" active={location.pathname === '/dashboard-dokter'} />
                                    <SidebarItem icon={<UserRound size={20} />} text="Daftar Antrian" to="/dashboard-dokter/daftar-antrian" active={location.pathname === '/dashboard-dokter/daftar-antrian'} />
                                    <SidebarItem icon={<Text size={20} />} text="Review Dokter" to="/dashboard-dokter/review-dokter" active={location.pathname === '/dashboard-dokter/review-dokter'} />
                                </ul>
                                <div className={'flex-2 px-3'}>
                                    <SidebarItem icon={<LogOut size={20} />} text="Log Out"/>
                                </div>
                            </SidebarContext.Provider>

                            
                        </nav>
                    </aside>

                    {/* Header */}
                    <div className="flex flex-col flex-1 overflow-hidden">
                        <DoctorHeader doctorName={doctorName} />
                        {/* Konten */}
                        {renderContent()}
                    </div>
                </div>
            </div>
        </>
    )
}

function SidebarItem({ icon, text, active, to }) {
    const { expanded } = useContext(SidebarContext);

    return (
        <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group
            ${active ? "bg-[color:var(--tertiary)] from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}>
            <Link to={to} className="flex items-center w-full">
                {icon}
                <span className={`overflow-hidden transition-all ${expanded ? "w-30 ml-3" : "w-0"}`}>{text}</span>
            </Link>
        </li>
    );
}
