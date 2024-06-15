/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import ButtonGroup from "../components/ButtonGroup";
import CardList from "../components/CardList";

function ListDokter() {
  const [filter, setFilter] = useState("Semua");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Tetapkan jumlah item per halaman

  const handleFilter = (filter) => {
    setFilter(filter);
    setCurrentPage(1); // Reset ke halaman pertama saat filter berubah
  };

  const getDoctors = async () => {
    try {
      const response = await axios.get(
        "https://api-msib-6-klinik-app-04.educalab.id/api/v1/doctor/all"
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDoctors();
  }, []);

  // Hitung data yang akan ditampilkan pada halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData =
    filter === "Semua"
      ? data.slice(indexOfFirstItem, indexOfLastItem)
      : data
          .filter((doctor) => doctor.specialization === filter)
          .slice(indexOfFirstItem, indexOfLastItem);

  // Hitung total halaman
  const totalPages =
    filter === "Semua"
      ? Math.ceil(data.length / itemsPerPage)
      : Math.ceil(
          data.filter((doctor) => doctor.specialization === filter).length /
            itemsPerPage
        );

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <>
      <section className="py-10 px-4 lg:px-20">
        <section>
          <h1 className="text-xl lg:text-2xl font-semibold">Spesialisasi</h1>
          <div className="py-6 flex flex-row gap-2 lg:gap-4 overflow-x-auto items-center justify-evenly">
            <ButtonGroup
              img="fa-grip"
              title="Semua Dokter"
              isSelected={filter === "Semua"}
              onClick={() => handleFilter("Semua")}
            />
            <ButtonGroup
              img="fa-child"
              title="Umum"
              isSelected={filter === "Umum"}
              onClick={() => handleFilter("Umum")}
            />
            <ButtonGroup
              img="fa-lungs"
              title="Paru-Paru"
              isSelected={filter === "Paru-Paru"}
              onClick={() => handleFilter("Paru-Paru")}
            />
            <ButtonGroup
              img="fa-stomach"
              title="Lambung"
              isSelected={filter === "Lambung"}
              onClick={() => handleFilter("Lambung")}
            />
            <ButtonGroup
              img="fa-eye"
              title="Mata"
              isSelected={filter === "Mata"}
              onClick={() => handleFilter("Mata")}
            />
            <ButtonGroup
              img="fa-heartbeat"
              title="Jantung"
              isSelected={filter === "Jantung"}
              onClick={() => handleFilter("Jantung")}
            />
            <ButtonGroup
              img="fa-ear"
              title="THT"
              isSelected={filter === "THT"}
              onClick={() => handleFilter("THT")}
            />
            <ButtonGroup
              img="fas fa-bone"
              title="Tulang"
              isSelected={filter === "Tulang"}
              onClick={() => handleFilter("Tulang")}
            />
            <ButtonGroup
              img="fas fa-tooth"
              title="Gigi"
              isSelected={filter === "Gigi"}
              onClick={() => handleFilter("Gigi")}
            />
          </div>
        </section>
        <h1 className="text-xl my-4 lg:text-2xl font-semibold">
          {filter === "Semua" ? "Semua Dokter" : filter}
        </h1>
        <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 my-4">
          {currentData.map((doctor) => (
            <CardList
              key={doctor.doctor_id}
              name={doctor.name}
              specialization={doctor.specialization}
              img={doctor.imgUrl}
              userId={doctor.user_id}
            />
          ))}
        </section>
        <div className="flex justify-center mt-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="px-2 py-1 sm:px-4 sm:py-2 bg-gray-300 rounded mx-1 sm:mx-2 text-xs sm:text-base"
          >
            Previous
          </button>
          <span className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-base">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-2 py-1 sm:px-4 sm:py-2 bg-gray-300 rounded mx-1 sm:mx-2 text-xs sm:text-base"
          >
            Next
          </button>
        </div>
      </section>
    </>
  );
}

export default ListDokter;
