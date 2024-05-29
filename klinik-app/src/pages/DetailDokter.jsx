import React from "react";
import Footer from "../components/Footer/Footer";
import CardDetail from "../components/CardDetail";
import FormReservasi from "../components/FormReservasi";

function DetailDokter() {
  return (
    <>
      <section className="mx-6 mt-4 md:mx-20 md:mt-10">
        <CardDetail />
        <FormReservasi />
      </section>
      <Footer />
    </>
  );
}

export default DetailDokter;
