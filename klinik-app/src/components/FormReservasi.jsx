import React from "react";

function FormReservasi() {
  return (
    <form className="my-7 p-7 border-2 border-slate-200 rounded-lg">
      <h1 className="text-2xl font-semibold my-4">Data Diri</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 gap-x-20">
        <div className="input-group">
          <label className="font-medium">Nama Lengkap</label>
          <input
            type="text"
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
            placeholder="Masukkan Nama Lengkap"
          />
        </div>
        <div className="input-group">
          <label className="font-medium">Alamat</label>
          <input
            type="text"
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
            placeholder="Masukkan Alamat Lengkap"
          />
        </div>
        <div className="input-group">
          <label className="font-medium">NIK</label>
          <input
            type="text"
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
            placeholder="Masukkan NIK"
          />
        </div>
        <div className="input-group">
          <label className="font-medium">Tanggal Reservasi</label>
          <input
            type="date"
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
            placeholder="Masukkan Nama Dokter"
          />
        </div>
        <div className="input-group">
          <label className="font-medium">Tempat, tanggal lahir</label>
          <input
            type="text"
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
            placeholder="Masukkan Tempat, Tanggal Lahir"
          />
        </div>
        <div
          className="input-group 
              row-span-2"
        >
          <label className="font-medium">Keluhan</label>
          <textarea
            className="form-control
              block
              lg:h-full
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
            placeholder="Masukkan Keluhan"
          />
        </div>
        <div className="input-group">
          <label className="font-medium">Jenis Kelamin</label>
          <select
            className="
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
            placeholder="Masukkan Nama Dokter"
          >
            <option>Laki-Laki</option>
            <option>Perempuan</option>
          </select>
        </div>
        <div className="input-group">
          <label className="font-medium">No Hp</label>
          <input
            type="number"
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
            placeholder="Masukkan Nomo HP"
          />
        </div>
        <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded h-fit w-full place-self-end">
          Reservasi Sekarang
        </button>
      </div>
    </form>
  );
}

export default FormReservasi;
