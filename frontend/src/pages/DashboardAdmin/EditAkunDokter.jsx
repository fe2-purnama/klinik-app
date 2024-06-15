/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import uploadImage from "../../utils/uploadImage";

const EditAkunDokter = () => {
  const [img, setImg] = useState();
  const { user_id } = useParams(); // Mengambil user_id dari parameter URL
  const navigate = useNavigate(); // Hook untuk redirection
  const [formData, setFormData] = useState({
    doctor_id: "",
    name: "",
    gender: "",
    password: "",
    confirm_password: "",
    email: "",
    phone_number: "",
    specialization: "",
    experience: "",
  });
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `https://api-msib-6-klinik-app-04.educalab.id/api/v1/doctor/detail/${user_id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const doctorData = response.data;
        setFormData({
          doctor_id: doctorData.doctor[0].doctor_id || "",
          name: doctorData.doctor[0].name || "",
          gender: doctorData.doctor[0].gender || "",
          email: doctorData.email || "",
          phone_number: doctorData.doctor[0].phone_number || "",
          specialization: doctorData.doctor[0].specialization || "",
          experience: doctorData.doctor[0].experience || "",
          password: "",
          confirm_password: "",
        });
      } catch (error) {
        console.error("Error fetching doctor details:", error);
      }
    };

    fetchData();
  }, [user_id]);

  const handlePasswordChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      password: e.target.value,
    }));
    if (
      formData.confirm_password &&
      e.target.value !== formData.confirm_password
    ) {
      setPasswordError("Password tidak sesuai");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      confirm_password: e.target.value,
    }));
    if (formData.password && e.target.value !== formData.password) {
      setPasswordError("Password tidak sesuai");
    } else {
      setPasswordError("");
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleImgChange = (e) => {
    setImg(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirm_password) {
      setPasswordError("Password tidak sesuai");
      return;
    }

    Swal.fire({
      title: "Konfirmasi Simpan",
      text: "Apakah Anda yakin ingin menyimpan perubahan?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, simpan!",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const imgUrl = await uploadImage(img);
          console.log(imgUrl);

          const formDataToSend = {
            ...formData,
            imgUrl: imgUrl,
          };

          const token = localStorage.getItem("token");
          await axios.patch(
            `https://api-msib-6-klinik-app-04.educalab.id/api/v1/doctor/update`,
            formDataToSend,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          Swal.fire(
            "Tersimpan!",
            "Data dokter berhasil diperbarui.",
            "success"
          ).then(() => {
            navigate("/admin");
          });
        } catch (error) {
          console.error("Error updating doctor details:", error);
          Swal.fire(
            "Gagal!",
            "Terjadi kesalahan saat memperbarui data.",
            "error"
          );
        }
      }
    });
  };

  return (
    <section className="w-full">
      <h1 className="text-2xl font-medium mx-10 my-8">Edit Akun Dokter</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg px-5 py-5 mx-10 my-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-10">
          <div>
            <div className="mb-5">
              <label
                htmlFor="doctor_id"
                className="block mb-2 text-sm font-medium text-[color:var(--other1)]"
              >
                STR
              </label>
              <input
                type="text"
                id="doctor_id"
                disabled
                value={formData.doctor_id}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 cursor-not-allowed text-gray-500 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="STR"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-[color:var(--other1)]"
              >
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
              <label
                htmlFor="gender"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
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
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-[color:var(--other1)]"
              >
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
              <label
                htmlFor="confirm_password"
                className="block mb-2 text-sm font-medium text-[color:var(--other1)]"
              >
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
              {passwordError && (
                <p className="text-sm text-red-500">{passwordError}</p>
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
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="phone_number"
                className="block mb-2 text-sm font-medium text-[color:var(--other1)]"
              >
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
              <label
                htmlFor="specialization"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Spesialisasi
              </label>
              <select
                id="specialization"
                value={formData.specialization}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
              >
                <option value="">Pilih Spesialis</option>
                <option value="Umum">Umum</option>
                <option value="Gigi">Gigi</option>
                <option value="Jantung">Jantung</option>
                <option value="THT">THT</option>
                <option value="Paru-Paru">Paru-Paru</option>
                <option value="Tulang">Tulang</option>
                <option value="Mata">Mata</option>
                <option value="Cardiology">Cardiology</option>
              </select>
            </div>
            <div className="relative mb-5">
              <label
                htmlFor="experience"
                className="block mb-2 text-sm font-medium text-[color:var(--other1)]"
              >
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
                <span className="absolute inset-y-0 right-0 flex text-sm items-center pr-3 pointer-events-none text-gray-500">
                  tahun
                </span>
              </div>
            </div>
            <div className="relative mb-5">
              <label className="block mb-2 text-sm font-medium text-[color:var(--other1)]">
                Edit foto profil
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="img"
                  onChange={handleImgChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                  placeholder="Pengalaman"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-sky-500 dark:hover:bg-sky-600 dark:focus:ring-sky-700"
        >
          Simpan
        </button>
      </form>
    </section>
  );
};

export default EditAkunDokter;
