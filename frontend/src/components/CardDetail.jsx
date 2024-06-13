/* eslint-disable no-unused-vars */
import React from "react";

function CardDetail(props) {
  const { imgUrl, name, specialization, doctor_id, experience } = props;
  return (
    <section>
      <h1 className="text-2xl font-semibold">Daftar Konsultasi</h1>
      <div className="flex flex-col lg:flex-row gap-8 w-full h-fit my-6">
        <div className="aspect-square max-w-60 bg-sky-300 rounded-lg overflow-hidden self-center">
          <img
            src={imgUrl || "https://placehold.co/600x600?text=Foto+Dokter"}
            className="object-center object-cover h-full"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-lg md:text-2xl font-semibold">{name}</h1>
          <p className="text-lg text-[--primary]">{specialization}</p>
          <p className="text-lg text-slate-500">{doctor_id}</p>
          <div className="flex flex-row gap-4">
            <div className="flex flex-row items-center gap-2">
              <i className="fas fa-users-medical"></i>
              <p className="text-sm text-slate-400">200+ pasien</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <i className="fas fa-laptop-medical"></i>
              <p className="text-sm text-slate-400">
                {experience}+ tahun pengalaman
              </p>
            </div>
          </div>
          <div className="flex flex-row items-start gap-5 py-4 overflow-x-auto">
            <div className="flex flex-col items-center gap-2">
              <div className="flex flex-row gap-2 items-center">
                <i className="fas fa-sun-haze"></i>
                <p>Pagi</p>
              </div>
              <p className="px-2 py-1 bg-slate-200 text-sm rounded-md w-28">
                08.00 - 11.00
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex flex-row gap-2 items-center">
                <i className="fas fa-sun"></i>
                <p>Siang</p>
              </div>
              <p className="px-2 py-1 bg-slate-200 text-sm rounded-md w-28">
                13.00 - 14.00
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex flex-row gap-2 items-center">
                <i className="fas fa-moon"></i>
                <p>Malam</p>
              </div>
              <p className="px-2 py-1 bg-slate-200 text-sm rounded-md w-28">
                16.00 - 19.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardDetail;
