import React, { useState, useEffect } from "react";
import axios from "axios";
import { Alert } from "flowbite-react";
import { Button } from "flowbite-react";

function ProfilePasien() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
  });
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const token = localStorage.getItem("token");
  const [responseMessage, setResponseMessage] = useState("");
  const [responseError, setResponseError] = useState("");
  const [loading, setLoading] = useState(false);

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

    setPassword(newPassword);

    if (confirmPassword && newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    if (formData.password !== newConfirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  const getUser = async () => {
    try {
      const response = await axios.get(
        "https://api-msib-6-klinik-app-04.educalab.id/api/v1/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setFormData((prevFormData) => ({
        ...prevFormData,
        name: response.data.patient.name,
        email: response.data.email,
        phone_number: response.data.patient.phone_number,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.patch(
        "https://api-msib-6-klinik-app-04.educalab.id/api/v1/update",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setResponseMessage(response.data.message);
    } catch (error) {
      setResponseError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <section className="w-full p-2">
      <h1 className="text-2xl font-medium ">Profile Akun</h1>
      {responseMessage && (
        <Alert
          color="success"
          onDismiss={() => {
            setResponseMessage("");
          }}
        >
          {responseMessage}
        </Alert>
      )}
      {responseError && (
        <Alert
          color={"failure"}
          onDismiss={() => {
            setResponseError("");
          }}
        >
          Masukkan password anda atau ubah profile yang berbeda dari profile
          sebelumnya
        </Alert>
      )}
      <form className="bg-white rounded-lg mt-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-10">
          <div>
            <div className="mb-5">
              <label
                htmlFor="nama"
                className="block mb-2 text-sm font-medium text-[color:var(--other1)]"
              >
                Nama
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="Dr. Andi Wijaya"
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
                name="password"
                value={password || formData.password}
                onChange={handlePasswordChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="Password"
                required
              />
            </div>
            <div className="md:mb-5 lg:mb-5">
              <label
                htmlFor="confirm-password"
                className="block mb-2 text-sm font-medium text-[color:var(--other1)]"
              >
                Konfirmasi Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="Konfirmasi Password"
                required
              />
              {passwordError && (
                <p className="text-sm text-red-600 mt-1">{passwordError}</p>
              )}
            </div>
          </div>
          <div>
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
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="AndiWijaya@gmail.com"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="noHP"
                className="block mb-2 text-sm font-medium text-[color:var(--other1)]"
              >
                No Handphone
              </label>
              <input
                type="number"
                id="phone_number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="083423432231"
                required
              />
            </div>
          </div>
        </div>

        {loading ? (
          <Button isProcessing>Loading...</Button>
        ) : (
          <button
            type="submit"
            onClick={handleSubmit}
            className={`text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800 ${
              passwordError ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Simpan
          </button>
        )}
      </form>
    </section>
  );
}

export default ProfilePasien;
