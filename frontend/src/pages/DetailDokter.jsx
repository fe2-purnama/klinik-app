/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import CardDetail from "../components/CardDetail";
import FormReservasi from "../components/FormReservasi";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetailDokter() {
  const [data, setData] = useState();

  const userId = useParams();

  const getDetailDokter = async () => {
    try {
      const response = await axios.get(
        `https://api-msib-6-klinik-app-04.educalab.id/api/v1/doctor/detail/${userId.userId}`
      );

      setData(response.data.doctor[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDetailDokter();
  }, []);

  return (
    <>
      <section className="mx-6 mt-4 md:mx-20 md:mt-10">
        <CardDetail
          imgUrl={data?.imgUrl}
          name={data?.name}
          specialization={data?.specialization}
          doctor_id={data?.doctor_id}
          experience={data?.experience}
        />
        <FormReservasi
          name={data?.name}
          doctorId={data?.doctor_id}
          specialization={data?.specialization}
        />
      </section>
      <Footer />
    </>
  );
}

export default DetailDokter;
