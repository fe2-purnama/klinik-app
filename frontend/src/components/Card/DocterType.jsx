/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// components/DoctorCard.jsx
import React from 'react';
import './DoctorType.css';

const DoctorCard = ({ photo, name, specialty, experience }) => {
  return (
    <div className="card w-full mx-auto sm:w-40 md:w-48 lg:w-56 rounded-lg shadow-lg flex flex-col mt-5 bg-secondary transition-all">
      <div className="flex justify-center">
        <img src={photo} alt={name} className="object-cover rounded-t-lg" />
      </div>
      <div className="bg-white mb-2 px-4 py-2 flex flex-col flex-grow">
        <h3 className="text-sm md:text-lg font-semibold mb-2">{name}</h3>
        <div className="flex-grow"></div>
        <div className="detail mt-auto">
          <p className="text-xs md:text-sm font-medium text-[color:var(--primary)] mb-1">{specialty}</p>
          <p className="text-[10px] md:text-sm text-gray-600">{experience} tahun pengalaman</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
