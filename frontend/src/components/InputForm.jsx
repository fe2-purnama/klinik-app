/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

function InputForm(props) {
  const { label, type, placeholder, value, onChange } = props;

  return (
    <div className="input-group">
      <label className="font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="form-control
              block
              w-full
              mt-4
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-sky-200 focus:outline-none"
        id="exampleFormControlInput1"
        placeholder={placeholder}
        required
        min={new Date().toISOString().split('T')[0]}
      />
    </div>
  );
}

export default InputForm;
