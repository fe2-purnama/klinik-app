import React from 'react';
import { Menu } from 'lucide-react';

const DoctorHeader = ({ doctorName, setIsSidebarOpen, isSidebarOpen }) => {
    return (
        <div className="w-full flex items-center px-2 py-2 bg-white border-b-4 border-[color:var(--primary)] sticky top-0 z-30">
            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 sm:hidden"
            >
                <Menu />
            </button>
            <div className='ml-2'>
                <span className="sm:text-base md:text-xl text-gray-600">Selamat Datang,</span>
                <h1 className="sm:text-base md:text-xl font-medium">{doctorName}</h1>
            </div>
        </div>
    );
};

export default DoctorHeader;
