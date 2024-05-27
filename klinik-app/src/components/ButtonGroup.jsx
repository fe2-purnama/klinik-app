import React from "react";

function ButtonGroup(props) {
  const { img, title, onClick } = props;

  return (
    <>
      <label
        className="flex flex-col items-center justify-center p-4 min-w-24 min-h-28 lg:w-32 lg:h-40 gap-4 rounded-lg has-[:checked]:bg-blue-300 cursor-pointer"
        onClick={onClick}
      >
        <div>
          <img src={img} className="w-8 md:w-16 h-auto" />
        </div>
        <p className=" text-xs md:text-sm text-center">{title}</p>
        <input type="radio" name="filter" className="hidden" />
      </label>
    </>
  );
}

export default ButtonGroup;
