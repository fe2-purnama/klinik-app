// Tambahkan impor useState dan Modal
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, LogOut, LayoutDashboard, Text, UserCircle2 } from 'lucide-react';
import Brand from '../../assets/brand.png';
import DoctorHeader from './HeaderDokter';
import DaftarAntrian from '../../pages/Dashboard-dokter/DaftarAntrian';
import ReviewDokter from '../../pages/Dashboard-dokter/ReviewDokter';
import Modal from '../Modal/Modal'; // Impor Modal
import ProfilDokter from '../../pages/Dashboard-dokter/ProfilDokter';
import axios from 'axios';

const SidebarContext = createContext();

export default function DoctorSidebar() {
    const [expanded, setExpanded] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    const [doctorName, setDoctorName] = useState('');
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

    useEffect(() => {
        fetchDoctorName();
    }, []);

    const fetchDoctorName = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:5000/api/v1/doctor/profile', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const doctorName = response.data.doctor[0].name;
            setDoctorName(doctorName);
        } catch (error) {
            console.error('Failed to fetch doctor name:', error);
        }
    };

    const handleLogout = () => {
        setIsLogoutModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsLogoutModalOpen(false);
    };

    const handleConfirmLogout = () => {
        localStorage.removeItem('token');
        navigate('/Login');
    };

    const renderContent = () => {
        switch (location.pathname) {
            case '/dashboard-dokter':
                return <DaftarAntrian />;
            case '/dashboard-dokter/review-dokter':
                return <ReviewDokter />;
            case '/dashboard-dokter/profil-dokter':
                return <ProfilDokter />;
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
                                    <Menu />
                                </button>
                            </div>

                            <SidebarContext.Provider value={{ expanded }}>
                                <ul className="flex-1 px-3">
                                    <SidebarItem icon={<LayoutDashboard size={20} />} text="Daftar Antrian" to="/dashboard-dokter" active={location.pathname === '/dashboard-dokter'} />
                                    <SidebarItem icon={<Text size={20} />} text="Review" to="/dashboard-dokter/review-dokter" active={location.pathname === '/dashboard-dokter/review-dokter'} />
                                    <SidebarItem icon={<UserCircle2 size={20} />} text="Profil" to="/dashboard-dokter/profil-dokter" active={location.pathname === '/dashboard-dokter/profil-dokter'} />
                                </ul>
                                <div className={'flex-2 px-3'}>
                                    <SidebarItem icon={<LogOut size={20} />} text="Log Out" onClick={handleLogout} />
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

            {/* Modal konfirmasi log out */}
            <Modal
                isOpen={isLogoutModalOpen}
                handleClose={handleCloseModal}
                title="Konfirmasi Log Out"
                message="Apakah Anda yakin ingin log out?"
                confirmButton="bg-red-600 hover:bg-red-800 focus:ring-green-500"
                cancelButton="hover:bg-gray-300 focus:ring-red-500"
                handleConfirm={handleConfirmLogout}
            />
        </>
    );
}

function SidebarItem({ icon, text, active, to, onClick}) {
    const { expanded } = useContext(SidebarContext);

    return (
        <li onClick={onClick} className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group
            ${active ? "bg-[color:var(--tertiary)] from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}>
            <Link to={to} className="flex items-center w-full">
                {icon}
                <span className={`overflow-hidden transition-all ${expanded ? "w-30 ml-3" : "w-0"}`}>{text}</span>
            </Link>
        </li>
    );
}
