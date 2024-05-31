import React from 'react';

const DoctorHeader = ({ doctorName }) => {
    return (
        <div className="w-full items-center justify-between px-8 py-4 bg-white border-b-4 border-[color:var(--primary)]">
            <span className="text-gray-600">Selamat Datang,</span>
            <h1 className="text-xl font-medium">{doctorName}</h1>
        </div>
    );
};

export default DoctorHeader;
