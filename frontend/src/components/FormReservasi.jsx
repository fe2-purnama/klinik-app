/* eslint-disable no-unused-vars */
import React from 'react';
import InputForm from './../components/InputForm';

function FormReservasi() {
  return (
    <form className="my-7 p-7 border-2 border-slate-200 rounded-lg">
      <h1 className="text-2xl font-semibold my-4">Data Diri</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 gap-x-20">
        <InputForm label="Nama Lengkap" type="text" placeholder="Masukkan nama lengkap" />
        <InputForm label="Alamat" type="text" placeholder="Masukkan alamat" />
        <InputForm label="NIK" type="text" placeholder="Masukkan NIK" />
        <InputForm label="Tanggal Reservasi" type="date" />
        <InputForm label="Tempat, tanggal lahir" type="text" placeholder="Masukkan tempat, tanggal lahir" />
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
            required
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
            required
          >
            <option>Laki-Laki</option>
            <option>Perempuan</option>
          </select>
        </div>
        <InputForm label="No HP" type="number" placeholder="Masukkan No Hp" />
        <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded h-fit w-full place-self-end">Reservasi Sekarang</button>
      </div>
    </form>
  );
}

export default FormReservasi;
