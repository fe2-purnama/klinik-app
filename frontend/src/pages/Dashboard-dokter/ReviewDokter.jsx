import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "../../components/DashboardDokter/TableDokter";

const ReviewDokter = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchReviews = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "https://api-msib-6-klinik-app-04.educalab.id/api/v1/doctor/review",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const reviews = response.data[0]?.doctor[0]?.reservation.map(
        (reservation) => ({
          reservationNumber: reservation.reservation_id,
          date: new Date(reservation.reservation_date).toLocaleDateString(),
          patientName: reservation.patient_name,
          complaint: reservation.complaint,
          review:
            reservation.review.length > 0
              ? reservation.review[0].review
              : "Belum memberikan review",
        })
      );
      setData(reviews);
    } catch (error) {
      console.error("Failed to fetch reviews:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
    const intervalId = setInterval(fetchReviews, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const headers = [
    "No.",
    "No. Reservasi",
    "Tanggal",
    "Nama Pasien",
    "Keluhan",
    "Review",
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(
    (item) =>
      item.patientName &&
      item.patientName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
      <div className="container px-3 sm:px-4 md:px-6 py-8 mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-700">
          Review Dokter
        </h2>
        <div className="mt-6">
          <span>Cari </span>
          <input
            type="text"
            placeholder="Cari Nama Pasien"
            value={searchTerm}
            onChange={handleSearch}
            className="px-3 py-1 border border-gray-300 rounded-md focus:ring-[color:var(--primary)]"
          />
        </div>
        <Table headers={headers}>
          {filteredData.map((item, index) => (
            <tr key={index} className="relative">
              <td className="px-4 py-4 text-[10px] md:text-sm leading-5 text-gray-900 whitespace-nowrap border-b border-gray-200">
                {index + 1}
              </td>
              <td className="px-4 py-4 text-[10px] md:text-sm leading-5 text-gray-900 whitespace-nowrap border-b border-gray-200">
                {item.reservationNumber}
              </td>
              <td className="px-4 py-4 text-[10px] md:text-sm leading-5 text-gray-900 whitespace-nowrap border-b border-gray-200">
                {item.date}
              </td>
              <td className="px-4 py-4 text-[10px] md:text-sm leading-5 text-gray-900 whitespace-nowrap border-b border-gray-200">
                {item.patientName}
              </td>
              <td className="px-4 py-4 text-[10px] md:text-sm leading-5 text-gray-900 whitespace-nowrap border-b border-gray-200">
                {item.complaint}
              </td>
              <td className="px-4 py-4 text-[10px] md:text-sm leading-5 text-gray-900 border-b border-gray-200">
                {item.review}
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default ReviewDokter;
