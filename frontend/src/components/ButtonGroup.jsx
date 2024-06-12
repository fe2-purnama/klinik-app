/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

function ButtonGroup(props) {
  const { img, title, onClick, isSelected } = props;

  return (
    <label
      className={`flex flex-col items-center justify-center p-4 min-w-24 min-h-28 lg:w-32 lg:h-40 gap-4 rounded-lg cursor-pointer transition-all duration-300 ease-in-out 
        ${isSelected ? 'bg-[--primary] text-white' : 'hover:bg-[--primary] group hover:text-white'}`}
      onClick={onClick}
    >
      <i className={`fas ${img} fa-2xl transition-all duration-300 ease-in-out ${isSelected ? 'text-white' : 'text-[--primary] group-hover:text-white'}`}></i>
      <p className="text-xs md:text-sm text-center">{title}</p>
      <input type="radio" name="filter" className="hidden" checked={isSelected} readOnly />
    </label>
  );
}

export default ButtonGroup;
