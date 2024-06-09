/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const TambahAkunDokter = () => {
  const [formData, setFormData] = useState({
    doctor_id: '',
    name: '',
    gender: '',
    password: '',
    confirm_password: '',
    email: '',
    phone_number: '',
    specialization: '',
    experience: '',
  });

  const [passwordError, setPasswordError] = useState('');
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImVtYWlsIjoiYWRtaW4iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTc5MTc0MTQsImV4cCI6MTcxNzkyMTAxNH0.bxBH3A4Bz0BessnGm186x9TUEnlY09KlTGo9skSYPmI'; // Replace with your actual token

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      password: value,
    }));
    if (formData.confirm_password && value !== formData.confirm_password) {
      setPasswordError('Password tidak sesuai');
    } else {
      setPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      confirm_password: value,
    }));
    if (formData.password && value !== formData.password) {
      setPasswordError('Password tidak sesuai');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirm_password) {
      setPasswordError('Password tidak sesuai');
      return;
    }

    // Parse experience to number
    const formDataToSend = { ...formData, experience: parseInt(formData.experience, 10) };

    try {
      const response = await axios.post('http://localhost:5000/api/v1/doctor/register', JSON.stringify(formDataToSend), {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      console.log('Success:', response.data);

      // Show success modal
      Swal.fire({
        icon: 'success',
        title: 'Sukses',
        text: 'Data dokter berhasil ditambahkan!',
      });

      // Reset form
      setFormData({
        doctor_id: '',
        name: '',
        gender: '',
        password: '',
        confirm_password: '',
        email: '',
        phone_number: '',
        specialization: '',
        experience: '',
      });
    } catch (error) {
      console.error('Error:', error);

      // Show error modal
      Swal.fire({
        icon: 'error',
        title: 'Gagal',
        text: 'Terjadi kesalahan saat menambahkan data dokter.',
      });
    }
  };

  return (
    <section className="w-full">
      <h1 className="text-2xl font-medium mx-10 my-8">Tambah Akun Dokter</h1>
      <form className="bg-white rounded-lg px-2 py-4 mx-10 my-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-10 lg:px-5">
          <div>
            <div className="mb-5">
              <label htmlFor="doctor_id" className="block mb-2 text-sm font-medium text-[color:var(--other1)]">
                STR
              </label>
              <input
                type="text"
                id="doctor_id"
                value={formData.doctor_id}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="STR"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-[color:var(--other1)]">
                Nama Dokter
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="Nama Dokter"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Jenis Kelamin
              </label>
              <select
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
              >
                <option value="">Jenis Kelamin</option>
                <option value="Laki-Laki">Laki-Laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-[color:var(--other1)]">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handlePasswordChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="Password"
                required
              />
            </div>
            <div className="md:mb-5 lg:mb-5">
              <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-[color:var(--other1)]">
                Konfirmasi Password
              </label>
              <input
                type="password"
                id="confirm_password"
                value={formData.confirm_password}
                onChange={handleConfirmPasswordChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="Konfirmasi Password"
                required
              />
              {passwordError && <p className="text-sm text-red-600 mt-1">{passwordError}</p>}
            </div>
          </div>
          <div>
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-[color:var(--other1)]">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="phone_number" className="block mb-2 text-sm font-medium text-[color:var(--other1)]">
                No Handphone
              </label>
              <input
                type="text"
                id="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="No Handphone"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="specialization" className="block mb-2 text-sm font-medium text-[color:var(--other1)]">
                Spesialist
              </label>
              <input
                type="text"
                id="specialization"
                value={formData.specialization}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="Spesialist"
                required
              />
            </div>
            <div className="relative mb-5">
              <label htmlFor="experience" className="block mb-2 text-sm font-medium text-[color:var(--other1)]">
                Pengalaman
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 pr-12 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                  placeholder="Pengalaman"
                  required
                />
                <span className="absolute inset-y-0 right-0 flex text-sm items-center pr-3 pointer-events-none text-gray-500">tahun</span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:px-5">
          <button
            type="submit"
            className="text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
          >
            Simpan
          </button>
        </div>
      </form>
    </section>
  );
};

export default TambahAkunDokter;
