// components/DoctorCard.jsx
import React from 'react';
import './DoctorType.css';

const DoctorCard = ({ photo, name, specialty, experience }) => {
    return (
        <div className="doctor-card rounded-lg shadow-lg flex flex-col mt-5">
            <img src={photo} alt={name} />
            <div className="content bg-white px-4 py-2">
                <h3 className="text-lg font-semibold mb-2">{name}</h3>
                <p className="text-sm font-medium text-[color:var(--primary)] mb-1">{specialty}</p>
                <p className="text-sm text-gray-600">{experience} tahun pengalaman</p>
            </div>
        </div>
    );
};

export default DoctorCard;
