/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// components/Accordion.jsx
import React from 'react';
import './Accordion.css';

const Accordion = ({ id, title, content, openAccordionId, setOpenAccordionId }) => {
  const isOpen = id === openAccordionId;

  const toggleAccordion = () => {
    setOpenAccordionId(isOpen ? null : id);
  };

  return (
    <div className="accordion">
      <h2 className="accordion-heading">
        <button type="button" className={`flex items-center justify-between w-full py-3 px-5 font-medium text-gray-500 gap-3 text-sm lg:text-base ${isOpen ? 'open' : ''}`} aria-expanded={isOpen} onClick={toggleAccordion}>
          <span className="text-[10px] sm:text-sm md:text-base">{title}</span>
          <svg className={`w-3 h-3 rotate-${isOpen ? '0' : '180'} transition-transform duration-300 ease-in-out`} aria-hidden="true" fill="none" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
          </svg>
        </button>
      </h2>
      {isOpen && (
        <div className={`accordion-body ${isOpen ? 'open' : 'closed'}`}>
          <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <div>
              <p className='text-xs md:text-sm lg:text-base'>{content}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
