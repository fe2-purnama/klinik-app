/* eslint-disable no-unused-vars */
// components/DoctorServices.jsx
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DoctorCard from "../components/Card/DocterType";
import DoctorServiceBox from "./Box/Box";
import "../components/Box/Box.css";

const initialDoctorData = [
  { id: 1, title: "Umum", icon: "fas fa-child" },
  { id: 2, title: "Paru-Paru", icon: "fas fa-lungs" },
  { id: 3, title: "Lambung", icon: "fas fa-stomach" },
  { id: 4, title: "Mata", icon: "fas fa-eye" },
  { id: 5, title: "Jantung", icon: "fas fa-heartbeat" },
];

const truncateName = (name, maxLength = 20) => {
  if (name.length <= maxLength) return name;

  const truncated = name.slice(0, maxLength - 3);
  return `${truncated}...`;
};

const DoctorServices = () => {
  const [doctorData, setDoctorData] = useState([]);
  const [activeService, setActiveService] = useState("Umum");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const response = await axios.get(
          "https://api-msib-6-klinik-app-04.educalab.id/api/v1/doctor/all"
        );
        setDoctorData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      }
    };

    fetchDoctorData();
  }, []);

  const activeDoctors = doctorData
    .filter((doctor) => doctor.specialization === activeService)
    .sort((a, b) => b.experience - a.experience)
    .map((doctor) => ({
      ...doctor,
      name: truncateName(doctor.name),
    }))
    .slice(0, 4);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="flex flex-row gap-1 overflow-x-auto justify-evenly lg:mx-36 xl:mx-40 2xl:mx-44">
        {initialDoctorData.map((service) => (
          <DoctorServiceBox
            key={service.id}
            id={service.id}
            title={service.title}
            icon={service.icon}
            isActive={service.title === activeService}
            onClick={() => setActiveService(service.title)}
          />
        ))}
        
          <Link to="/list-dokter" className="box flex flex-col cursor-pointer text-center transition-all duration-300 ease-in-out">
            <i className="fas fa-circle-chevron-right mb-2 text-2xl md:text-5xl"></i>
            <span className="text-center text-[10px] sm:text-xs md:text-sm lg:text-base">
              Lebih Banyak
            </span>
          </Link>
      </div>
      <div className="doctor-list xl:mx-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {activeDoctors.map((doctor, index) => (
          <DoctorCard
            key={index}
            photo={doctor.imgUrl}
            name={doctor.name}
            specialty={doctor.specialization}
            experience={doctor.experience}
          />
        ))}
      </div>
    </div>
  );
};

export default DoctorServices;
