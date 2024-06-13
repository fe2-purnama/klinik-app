/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Layanan4 from '../assets/service-ambulance.jpeg';
import Layanan1 from '../assets/service-konsultasi.png';
import Layanan5 from '../assets/service-laboratorium.jpeg';
import Layanan3 from '../assets/service-obat.jpeg';
import Layanan2 from '../assets/service-pemeriksaan.jpeg';
import ClinicServiceBox from './Box/Box';

const services = [
  {
    id: 1,
    title: 'Konsultasi Dokter',
    description: (
      <div className='flex flex-col md:flex-row justify py-6 xl:px-20'>
        <div className='mb-4'>
          <h1 className="text-sm md:text-xl xl:text-2xl font-bold mb-2">Kami memberikan layanan reservasi konsultasi dokter secara Online</h1>
          <ol className="list-decimal pl-6 text-xs md:text-base">
            <li>Masukkan akun</li>
            <li>Pilih menu konsultasi dokter</li>
            <li>Pilih kategori dokter</li>
            <li>Pilih dokter yang diinginkan</li>
            <li>Pilih jadwal yang tertera</li>
            <li>Lakukan pembayaran</li>
            <li>Anda berhasil melakukan reservasi Online</li>
          </ol>
        </div>
        <img src={Layanan1} alt="Konsultasi Dokter" className="w-full md:w-1/3 rounded-lg shadow-lg" />
      </div>
    ),
    icon: 'fas fa-user-md',
  },
  {
    id: 2,
    title: 'Pemeriksaan Kesehatan',
    description: (
      <div className='flex flex-col md:flex-row justify py-6 xl:px-20'>
        <div className='mb-4'>
          <h1 className="text-sm md:text-xl xl:text-2xl font-bold mb-2">Kami memberikan layanan pemeriksaan kesehatan sesuai permintaan</h1>
          <ol className="list-decimal pl-6 text-xs md:text-base">
            <li>Datang ke klinik sesuai jadwal reservasi dokter anda</li>
            <li>Terangkan keluhan anda</li>
            <li>Minta untuk pemeriksaan kesehatan</li>
            <li>Gunakan fasilitas pemeriksaan kesehatan</li>
          </ol>
        </div>
        <img src={Layanan2} alt="Pemeriksaan Kesehatan" className="w-full md:w-1/3 rounded-lg shadow-lg" />
      </div>
    ),
    icon: 'fas fa-stethoscope',
  },
  {
    id: 3,
    title: 'Resep Obat',
    description: (
      <div className='flex flex-col md:flex-row justify py-6 xl:px-20'>
        <div className='mb-4'>
          <h1 className="text-sm md:text-xl xl:text-2xl font-bold mb-2">Kami memberikan layanan resep obat yang direkomendasikan oleh Dokter</h1>
          <ol className="list-decimal pl-6 text-xs md:text-base">
            <li>Datang ke klinik sesuai jadwal klinik atau reservasi anda</li>
            <li>Terangkan keluhan anda pada Dokter kami</li>
            <li>Ambil resep obat dari Dokter kami</li>
            <li>Pergi ke bagian Farmasi</li>
            <li>Serahkan resep obat</li>
            <li>Anda mendapatkan obat sesuai resep yang diberikan</li>
          </ol>
        </div>
        <img src={Layanan3} alt="Resep Obat" className="w-full md:w-1/3 rounded-lg shadow-lg" />
      </div>
    ),
    icon: 'fas fa-pills',
  },
  {
    id: 4,
    title: 'Ambulance',
    description: (
      <div className='flex flex-col md:flex-row justify py-6 xl:px-20'>
        <div className='mb-4'>
          <h1 className="text-sm md:text-xl xl:text-2xl font-bold mb-2">Kami memberikan layanan ambulance yang siap datang di tempat anda</h1>
          <ol className="list-decimal pl-6 text-xs md:text-base">
            <li>
              Masuk ke halaman <b>Homepage</b>
            </li>
            <li>
              Klik menu bagian <b>Hubungi Kami</b>
            </li>
            <li>
              Isi formulir dengan memilih jenis pesan <b>Permintaan</b>
            </li>
            <li>
              Anda akan diarahkan ke <b>WhatsApp</b> resmi kami
            </li>
            <li>Terangkan bahwa anda memerlukan Ambulance dan tentukan waktu jemput</li>
            <li>Ambulance akan datang ke rumah anda</li>
          </ol>
        </div>
        <img src={Layanan4} alt="Ambulance" className="w-full md:w-1/3 rounded-lg shadow-lg" />
      </div>
    ),
    icon: 'fas fa-ambulance',
  },
  {
    id: 5,
    title: 'Laboratorium',
    description: (
      <div className='flex flex-col md:flex-row justify py-6 xl:px-20'>
        <div className='mb-4'>
          <h1 className="text-sm md:text-xl xl:text-2xl font-bold mb-2">Kami memberikan layanan Laboratorium untuk pemeriksaan lanjut</h1>
          <ol className="list-decimal pl-6 text-xs md:text-base">
            <li>
              Datang ke klinik sesuai <b>jadwal</b> klinik
            </li>
            <li>
              Pergi ke bagian <b>Administrasi</b>
            </li>
            <li>
              Sampaikan bahwa anda ingin ke <b>Laboratorium</b>
            </li>
            <li>Isi formulir yang tertera</li>
            <li>
              Tunggu dan anda akan segera diarahkan ke <b>Laboratorium</b>
            </li>
          </ol>
        </div>
        <img src={Layanan5} alt="Laboratorium" className="w-full md:w-1/3 rounded-lg shadow-lg" />
      </div>
    ),
    icon: 'fas fa-stethoscope',
  },
];

const ClinicServices = () => {
  const [activeService, setActiveService] = useState(services[0].id);

  const handleServiceClick = (id) => {
    setActiveService(id);
  };

  const activeServiceInfo = services.find((service) => service.id === activeService);

  return (
    <div className="container">
      <div className="flex flex-row gap-1 overflow-x-auto justify-evenly lg:mx-36 xl:mx-40 2xl:mx-44">
        {services.map((service) => (
          <ClinicServiceBox key={service.id} id={service.id} title={service.title} icon={service.icon} isActive={service.id === activeService} onClick={handleServiceClick} />
        ))}
      </div>
      <div className="">{activeServiceInfo.description}</div>
    </div>
  );
};

export default ClinicServices;
{/* py-6 flex flex-row gap-2 lg:gap-4 overflow-x-auto items-center justify-evenly */}