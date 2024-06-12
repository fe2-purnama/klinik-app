/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// components/DoctorCard.jsx
import React from 'react';
import './DoctorType.css';

const DoctorCard = ({ photo, name, specialty, experience }) => {
  return (
    <div className="card w-full mx-auto sm:w-40 md:w-48 lg:w-56 rounded-lg shadow-lg flex flex-col mt-5 bg-secondary transition-all">
      <img src={photo} alt={name} className="object-cover rounded-t-lg" />
      <div className="bg-white mb-2 px-4 py-2 flex-grow">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-sm font-medium text-[color:var(--primary)] mb-1">{specialty}</p>
        <p className="text-sm text-gray-600">{experience} tahun pengalaman</p>
      </div>
    </div>
  );
};

export default DoctorCard;
