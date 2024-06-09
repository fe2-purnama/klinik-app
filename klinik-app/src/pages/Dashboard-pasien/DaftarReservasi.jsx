import React, { useEffect, useState } from "react";
import TabelReservasiPasien from "../../components/TabelReservasiPasien";
import Axios from "axios";
import { Spinner } from "flowbite-react";

function DaftarReservasi() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getReservations = () => {
    try {
      Axios.get("http://localhost:5000/reservations/user/31")
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    } catch (error) {
      setError(error);
      setLoading(false);
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
