/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FormReservasi(props) {
  const { doctorId, name, specialization } = props;
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");
  const [formData, setFormData] = useState({
    doctor_id: "",
    doctor_name: "",
    specialization: "",
    patient_name: "",
    address: "",
    nik: "",
    phone_number: "",
    gender: "",
    complaint: "",
    reservation_date: "",
  });

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      doctor_id: doctorId,
      doctor_name: name,
      specialization: specialization,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    console.log(formData);

    try {
      const response = await axios.post(
        "https://api-msib-6-klinik-app-04.educalab.id/api/v1/reservation/create",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage(response.data.message);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="my-7 p-7 border-2 border-slate-200 rounded-lg"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl font-semibold my-4">Data Diri</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 gap-x-20">
        <div className="flex flex-col">
          <label>Nama Lengkap</label>
          <input
            label="Nama Lengkap"
            type="text"
            placeholder="Masukkan nama lengkap"
            name="patient_name"
            onChange={handleChange}
            required
            className="border-2 border-slate-200 rounded-md p-2 focus:border-sky-400 focus:ring-sky-400"
          />
        </div>
        <div className="flex flex-col">
          <label>Alamat</label>
          <input
            label="Alamat"
            type="text"
            placeholder="Masukkan alamat"
            name="address"
            onChange={handleChange}
            required
            className="border-2 border-slate-200 rounded-md p-2  focus:border-sky-400 focus:ring-sky-400"
          />
        </div>
        <div className="flex flex-col">
          <label>NIK</label>
          <input
            label="NIK"
            type="text"
            placeholder="Masukkan NIK"
            name="nik"
            onChange={handleChange}
            required
            className="border-2 border-slate-200 rounded-md p-2  focus:border-sky-400 focus:ring-sky-400"
          />
        </div>
        <div className="flex flex-col">
          <label>Tanggal Reservasi</label>
          <input
            label="Tanggal Reservasi"
            type="date"
            name="reservation_date"
            onChange={handleChange}
            required
            className="border-2 border-slate-200 rounded-md p-2  focus:border-sky-400 focus:ring-sky-400"
            min={new Date().toISOString().split("T")[0]}
          />
        </div>
        <div className="flex flex-col">
          <label>Tempat tanggal lahir</label>
          <input
            label="Tempat, tanggal lahir"
            type="text"
            placeholder="Masukkan tempat, tanggal lahir"
            name="ttl"
            onChange={handleChange}
            required
            className="border-2 border-slate-200 rounded-md p-2  focus:border-sky-400 focus:ring-sky-400"
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
              focus:text-gray-700 focus:bg-white focus:border-sky-400 focus:outline-none"
            id="exampleFormControlInput1"
            placeholder="Masukkan Keluhan"
            name="complaint"
            onChange={handleChange}
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
              focus:text-gray-700 focus:bg-white focus:border-sky-400 focus:outline-none"
            id="exampleFormControlInput1"
            placeholder="Masukkan Nama Dokter"
            name="gender"
            onChange={handleChange}
            required
          >
            <option>Pilih Jenis Kelamin</option>
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label> Nomor Hp</label>
          <input
            type="number"
            placeholder="Masukkan No Hp"
            name="phone_number"
            onChange={handleChange}
            required
            className="border-2 border-slate-200 rounded-md p-2 focus:border-sky-400 focus:ring-sky-400"
          />
        </div>
        <button
          type="submit"
          className={`bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded h-fit w-full place-self-end ${
            token ? "cursor-pointer" : "cursor-not-allowed bg-sky-300"
          }`}
        >
          Reservasi Sekarang
        </button>
      </div>
    </form>
  );
}

export default FormReservasi;
