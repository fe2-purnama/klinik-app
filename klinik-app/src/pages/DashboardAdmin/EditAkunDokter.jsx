import React from "react";

const EditAkunDokter = () => {
  return (
    <section className="w-full">
      <h1 className="text-2xl font-medium mx-10 my-8">Edit Akun Dokter</h1>
      <form className="bg-white rounded-lg px-5 py-5 mx-10 my-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-10">
          <div>
            <div className="mb-5">
              <label
                htmlFor="str"
                className="block mb-2 text-sm font-medium text-[color:var(--other1)]"
              >
                STR
              </label>
              <input
                type="number"
                id="str"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="00000007878011999"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="nama"
                className="block mb-2 text-sm font-medium text-[color:var(--other1)]"
              >
                Nama Dokter
              </label>
              <input
                type="text"
                id="nama"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="Dr. Andi Wijaya"
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
              >
                <option value="" disabled selected>
                  Jenis Kelamin
                </option>
                <option value="laki-laki">Laki-Laki</option>
                <option value="perempuan">Perempuan</option>
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
                id="confirm-password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="Konfirmasi Password"
                required
              />
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
                id="noHP"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="083423432231"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="spesialist"
                className="block mb-2 text-sm font-medium text-[color:var(--other1)]"
              >
                Spesialist
              </label>
              <input
                type="text"
                id="spesialist"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="Kardiologi"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="pengalaman"
                className="block mb-2 text-sm font-medium text-[color:var(--other1)]"
              >
                Pengalaman
              </label>
              <input
                type="number"
                id="pengalaman"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="4"
                required
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
        >
          Simpan
        </button>
      </form>
    </section>
  );
};

export default EditAkunDokter;
