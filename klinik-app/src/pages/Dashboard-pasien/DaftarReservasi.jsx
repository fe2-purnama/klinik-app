import React from "react";
import TabelReservasiPasien from "../../components/TabelReservasiPasien";

function DaftarReservasi() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-5">Daftar Reservasi Anda</h1>
      <TabelReservasiPasien />
    </div>
  );
}

export default DaftarReservasi;
