import React from "react";
import Profile1 from "./../assets/profile1.png";

function CardList(props) {
  const { img, title, onClick } = props;

  return (
    <>
      <div className="w-32 lg:w-48 h-auto rounded-lg overflow-hidden">
        <img src={Profile1} className="rounded-lg w-full h-auto" />

        <p className="text-sm lg:text-lg py-3 ">Dr. Ahmad Priatama, Sp.A</p>
        <p className="text-sm text-[--primary]">Spesialis Kesehatan Anak</p>
      </div>
    </>
  );
}

export default CardList;
