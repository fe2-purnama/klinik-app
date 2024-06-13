/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// components/ClinicServiceBox.jsx
import React from 'react';
import './Box.css';

const ClinicServiceBox = ({ id, title, icon, isActive, onClick }) => {
  return (
    <div className={`box flex flex-col cursor-pointer text-center transition-all duration-300 ease-in-out ${isActive ? 'active' : ''}`} onClick={() => onClick(id)}>
      <i className={`text-center fas ${icon} mb-2 text-2xl md:text-5xl`}></i>
      <span className="text-center text-[10px] sm:text-xs md:text-sm lg:text-base">{title}</span>
    </div>
  );
};

export default ClinicServiceBox;
