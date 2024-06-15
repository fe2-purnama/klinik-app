import axios from "axios";
import { Alert } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dokter from "../../../assets/dokter-hero.png";
import Logo from "../../../assets/logo.png";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://api-msib-6-klinik-app-04.educalab.id/api/v1/login",
        {
          email,
          password,
        }
      );
      const { token, role } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      if (role === "doctor") {
        navigate("/dashboard-dokter");
      } else if (role === "patient") {
        navigate("/dashboard");
      } else if (role === "admin") {
        navigate("/admin");
      }
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 403) {
        setError("Email atau password salah. Silakan coba lagi.");
      } else {
        setError("Terjadi kesalahan. Silakan coba lagi nanti.");
      }
      console.error("Login error:", error);
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
      <div className="kanan lg:h-screen flex justify-center p-4 lg:p-8">
        <div className="form w-full max-w-lg mx-4 sm:mx-auto">
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="teks mb-5 lg:mt-20">
              <h1 className="text-[color:var(--other1)] font-bold text-3xl lg:text-4xl">
                Selamat Datang!
              </h1>
              <p className="text-[color:var(--other1)]">
                Silahkan masuk terlebih dahulu!
              </p>
            </div>
            {error && (
              <Alert color="failure" onDismiss={() => setError("")}>
                <span className="font-medium">{error}</span>
              </Alert>
            )}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-[color:var(--other1)]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-[color:var(--other1)]"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-8">
              <button
                type="submit"
                className="text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
              >
                Masuk
              </button>
            </div>
            <div className="lg:mb-60">
              <p className="text-xs text-[color:var(--other1)]">
                Belum punya akun? Silahkan{" "}
                <Link className="font-bold" to="/Registrasi">
                  Daftar di sini
                </Link>
              </p>
            </div>
          </form>
          <p className="text-sm font-bold text-[color:var(--other2)] text-center mt-5 lg:mt-8">
            Klinik Prima 2024. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
