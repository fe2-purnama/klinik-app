import React, { useEffect, useState } from "react";
import TabelReservasiPasien from "../../components/TabelReservasiPasien";
import axios from "axios";
import { Spinner } from "flowbite-react";

function DaftarReservasi() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImVtYWlsIjoicXdlcnR5MTIzQHF3ZXJ0eS5jb20iLCJyb2xlIjoicGF0aWVudCIsImlhdCI6MTcxNzkxNzQ5NSwiZXhwIjoxNzE3OTIxMDk1fQ.hQUzblvokTvB9IqcKL491nEgRhyRpPl9LFPJwE_ZgQE";

  const getReservations = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/reservation",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    getReservations();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-5">Daftar Reservasi Anda</h1>
      {loading ? (
        <div>
          <span className="text-lg">Loading...</span>
          <Spinner aria-label="Extra large spinner example" size="xl" />
        </div>
      ) : (
        <TabelReservasiPasien data={data} />
      )}
    </div>
  );
}

export default DaftarReservasi;
