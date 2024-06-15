/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import Dokter from "../../../assets/dokter-hero.png";
import { Alert, Button } from "flowbite-react";
import Axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone_number: "",
  });
  const [confirmPassword, setconfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [responseError, setResponseError] = useState("");

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      password: newPassword,
    }));

    if (confirmPassword && newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setconfirmPassword(newConfirmPassword);

    if (formData.password !== newConfirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordError) {
      return;
    }

    try {
      setLoading(true);
      const response = await Axios.post(
        "https://api-msib-6-klinik-app-04.educalab.id/api/v1/register",
        formData
      );
      setResponseMessage(response.data.message);
    } catch (error) {
      setResponseError(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <div className="kiri lg:h-screen flex flex-col justify-center items-center">
        <div className="logo flex items-center mt-8 lg:mt-28 mb-12">
          <img src={Logo} alt="Klinik Prima" className="h-10 lg:h-20" />
          <h1 className="text-3xl lg:text-5xl ml-2">
            <span className="text-[color:var(--primary)] font-bold">
              Klinik{" "}
            </span>
            <span className="text-[color:var(--other)] font-bold">Prima</span>
          </h1>
        </div>
        <div className="flex justify-center">
          <img
            src={Dokter}
            alt="Dokter Image"
            className="w-1/2 sm:w-1/2 md:w-full mx-auto"
          />
        </div>
      </div>
      <div className="kanan lg:h-screen p-4 lg:p-8">
        <div className="form">
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto lg:mt-4">
            <div className="teks mb-5">
              <h1 className="text-[color:var(--other1)] font-bold text-3xl lg:text-4xl">
                Selamat Datang!
              </h1>
              <p className="text-[color:var(--other1)]">
                Silahkan daftar terlebih dahulu!
              </p>

              {responseMessage && (
                <Alert
                  color="success"
                  onDismiss={() => setResponseMessage(null)}
                >
                  <span className="font-medium">{responseMessage}</span>
                </Alert>
              )}
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-[color:var(--other1)]">
                Nama Lengkap
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="Nama Lengkap"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-[color:var(--other1)]">
                No HP
              </label>
              <input
                onChange={handleChange}
                type="number"
                name="phone_number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="No HP"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-[color:var(--other1)]">
                Email
              </label>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="Email"
                required
              />
              <p className="text-sm text-red-500">{responseError}</p>
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-[color:var(--other1)]">
                Password
              </label>
              <input
                onChange={handlePasswordChange}
                type="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="Password"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-[color:var(--other1)]">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="Confirm Password"
                required
              />
              {passwordError && (
                <p className="text-sm text-red-600 mt-1">{passwordError}</p>
              )}
            </div>
            <div className="mb-8">
              {loading ? (
                <Button isProcessing>Loading...</Button>
              ) : (
                <button
                  disabled={passwordError}
                  type="submit"
                  className="text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center disabled:cursor-not-allowed"
                >
                  Daftar
                </button>
              )}
            </div>
            <div className="mb-10">
              <p className="text-xs text-[color:var(--other1)]">
                Sudah punya akun? Silahkan{" "}
                <Link className="font-bold" to="/Login">
                  Masuk di sini
                </Link>
              </p>
            </div>
          </form>
          <p className="text-sm font-bold text-[color:var(--other2)] flex justify-center items-center">
            Klinik Prima 2024. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
