import React, { useEffect, useState } from "react";
import TabelReservasiPasien from "../../components/TabelReservasiPasien";
import axios from "axios";
import { Spinner } from "flowbite-react";

function DaftarReservasi() {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  const getReservations = async () => {
    try {
      const response = await axios.get(
        "https://api-msib-6-klinik-app-04.educalab.id/api/v1/reservation",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setData(response.data);
      setOriginalData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    getReservations();
  }, []);

  const handleFilter = (e) => {
    const filter = e.target.value;
    if (filter) {
      const filteredData = originalData.filter((item) =>
        item.reservation_id.includes(filter)
      );
      setData(filteredData);
    } else {
      setData(originalData);
    }
  };

  return (
    <div>
      <h1 className="text-md md:text-2xl font-semibold mb-5">
        Daftar Reservasi Anda
      </h1>
      <div className="my-4">
        <span>Cari reservasi</span>
        <input
          type="text"
          placeholder="id reservasi"
          onChange={handleFilter}
          className="bg-gray-50 md:mx-4 w-40 rounded-lg border-1 focus:border-sky-500 focus:ring-sky-500"
        />
      </div>
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
