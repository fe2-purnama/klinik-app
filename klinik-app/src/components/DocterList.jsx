/* eslint-disable no-unused-vars */
// components/DoctorServices.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Jantung1 from '../assets/dokter-jantung1.png';
import DoctorCard from '../components/Card/DocterType';
import DoctorServiceBox from './Box/Box';

const doctorData = [
  {
    id: 1,
    title: 'Kesehatan Anak',
    icon: 'fas fa-child',
    doctors: [
      { photo: Jantung1, name: 'Dr. Harley Davidson', specialty: 'Kesehatan Anak', experience: 10 },
      { photo: Jantung1, name: 'Dr. Harley Davidson', specialty: 'Kesehatan Anak', experience: 8 },
      { photo: Jantung1, name: 'Dr. Harley Davidson', specialty: 'Kesehatan Anak', experience: 12 },
      { photo: Jantung1, name: 'Dr. Harley Davidson', specialty: 'Kesehatan Anak', experience: 15 },
      { photo: Jantung1, name: 'Dr. Harley Davidson', specialty: 'Kesehatan Anak', experience: 9 },
      { photo: Jantung1, name: 'Dr. Harley Davidson', specialty: 'Kesehatan Anak', experience: 7 },
    ],
  },
  {
    id: 2,
    title: 'Paru-paru',
    icon: 'fas fa-lungs',
    doctors: [
      { photo: Jantung1, name: 'Dr. Harley Davidson', specialty: 'Paru-paru', experience: 10 },
      { photo: Jantung1, name: 'Dr. Harley Davidson', specialty: 'Paru-paru', experience: 8 },
      { photo: Jantung1, name: 'Dr. Harley Davidson', specialty: 'Paru-paru', experience: 12 },
      { photo: Jantung1, name: 'Dr. Harley Davidson', specialty: 'Paru-paru', experience: 15 },
      { photo: Jantung1, name: 'Dr. Harley Davidson', specialty: 'Paru-paru', experience: 9 },
      { photo: Jantung1, name: 'Dr. Harley Davidson', specialty: 'Paru-paru', experience: 7 },
    ],
  },
  {
    id: 3,
    title: 'Lambung',
    icon: 'fas fa-stomach',
    doctors: [
      { photo: Jantung1, name: 'Dr. Harley Davidson', specialty: 'Lambung', experience: 10 },
      { photo: Jantung1, name: 'Dr. Harley Davidson', specialty: 'Lambung', experience: 8 },
      { photo: Jantung1, name: 'Dr. Harley Davidson', specialty: 'Lambung', experience: 12 },
      { photo: Jantung1, name: 'Dr. Harley Davidson', specialty: 'Lambung', experience: 15 },
      { photo: Jantung1, name: 'Dr. Harley Davidson', specialty: 'Lambung', experience: 9 },
      { photo: Jantung1, name: 'Dr. Harley Davidson', specialty: 'Lambung', experience: 7 },
    ],
  },
  {
    id: 4,
    title: 'Mata',
    icon: 'fas fa-eye',
    doctors: [
      { photo: Jantung1, name: 'Dr. Harley Davidson', specialty: 'Mata', experience: 10 },
      { photo: Jantung1, name: 'Dr. Harley Davidson', specialty: 'Mata', experience: 8 },
      { photo: Jantung1, name: 'Dr. Harley Davidson', specialty: 'Mata', experience: 12 },
      { photo: Jantung1, name: 'Dr. Harley Davidson', specialty: 'Mata', experience: 15 },
      { photo: Jantung1, name: 'Dr. Harley Davidson', specialty: 'Mata', experience: 9 },
      { photo: Jantung1, name: 'Dr. Harley Davidson', specialty: 'Mata', experience: 7 },
    ],
  },
  {
    id: 5,
    title: 'Jantung',
    icon: 'fas fa-heartbeat',
    doctors: [
      { photo: Jantung1, name: 'Dr. Harley Davidson', specialty: 'Jantung', experience: 10 },
      { photo: Jantung1, name: 'Dr. Harley Davidson', specialty: 'Jantung', experience: 8 },
      { photo: Jantung1, name: 'Dr. Harley Davidson', specialty: 'Jantung', experience: 12 },
      { photo: Jantung1, name: 'Dr. Harley Davidson', specialty: 'Jantung', experience: 15 },
      { photo: Jantung1, name: 'Dr. Harley Davidson', specialty: 'Jantung', experience: 9 },
      { photo: Jantung1, name: 'Dr. Harley Davidson', specialty: 'Jantung', experience: 7 },
    ],
  },
];

const DoctorServices = () => {
  const [activeService, setActiveService] = useState(doctorData[0].id);

  const activeDoctors = doctorData
    .find((service) => service.id === activeService)
    .doctors.sort((a, b) => b.experience - a.experience)
    .slice(0, 4);

  return (
    <div className="container">
      <div className="flex flex-row gap-1 overflow-x-auto justify-evenly lg:mx-36 xl:mx-40 2xl:mx-44">
        {doctorData.map((service) => (
          <DoctorServiceBox key={service.id} id={service.id} title={service.title} icon={service.icon} isActive={service.id === activeService} onClick={setActiveService} />
        ))}
        <Link to="/list-dokter">
          <div className="box flex flex-col cursor-pointer text-center transition-all duration-300 ease-in-out">
            <i className={`fas fas fa-circle-chevron-right mb-2`}></i>
            <span className="text-center">Lebih Banyak</span>
          </div>
        </Link>
      </div>
      <div className="doctor-list xl:mx-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
        {activeDoctors.map((doctor, index) => (
          <DoctorCard key={index} photo={doctor.photo} name={doctor.name} specialty={doctor.specialty} experience={doctor.experience} />
        ))}
      </div>
    </div>
  );
};

export default DoctorServices;
