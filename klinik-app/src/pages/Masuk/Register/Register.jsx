/* eslint-disable no-unused-vars */
import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo.png';
import Dokter from '../../../assets/dokter-hero.png';

const Register = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className="kiri h-screen flex flex-col justify-center items-center">
        <div className="logo flex items-center mt-28 mb-12">
          <img src={Logo} alt="Klinik Prima" className="h-20" />
          <h1 className="text-5xl ml-2">
            <span className="text-[color:var(--primary)] font-bold">Klinik </span>
            <span className="text-[color:var(--other)] font-bold">Prima</span>
          </h1>
        </div>
        <div>
          <img src={Dokter} alt="Dokter Image" className="" />
        </div>
      </div>
      <div className="kanan h-screen">
        <div className="form">
          <form className="max-w-lg mx-auto mt-10">
            <div className="teks mb-5">
              <h1 className="text-[color:var(--other1)] font-bold text-4xl">Selamat Datang!</h1>
              <p className="text-[color:var(--other1)]">Silahkan daftar terlebih dahulu!</p>
            </div>
            <div className="mb-5">
              <label htmlFor="nama" className="block mb-2 text-sm font-medium text-[color:var(--other1)]">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="nama"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="Nama Lengkap"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="noHP" className="block mb-2 text-sm font-medium text-[color:var(--other1)]">
                No HP
              </label>
              <input
                type="number"
                id="noHP"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="No HP"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-[color:var(--other1)]">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-[color:var(--other1)]">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="Password"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-[color:var(--other1)]">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="mb-8">
              <button
                type="submit"
                className="text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
              >
                Daftar
              </button>
            </div>
            <div className="mb-10">
              <p className="text-xs text-[color:var(--other1)]">
                Sudah punya akun? Silahkan{' '}
                <Link className="font-bold" to="/Login">
                  Masuk di sini
                </Link>
              </p>
            </div>
          </form>
          <p className="text-sm font-bold text-[color:var(--other2)] flex justify-center items-center">Klinik Prima 2024. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
