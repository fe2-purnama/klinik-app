import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "sweetalert2";
import Table from "../../components/DashboardDokter/TableDokter";

const TableRow = ({ item, index, isEditing, onEditClick, onStatusChange }) => {
  const statusColors = {
    Menunggu: "text-yellow-800 bg-yellow-100",
    Proses: "text-blue-800 bg-blue-100",
    Selesai: "text-green-800 bg-green-100",
    Batal: "text-red-800 bg-red-100",
  };

  return (
    <tr className="relative">
      <td className="px-2 py-4 text-[10px] md:text-sm leading-5 text-gray-900 whitespace-nowrap border-b border-gray-200 md:px-4">
        {index}
      </td>
      <td className="px-2 py-4 text-[10px] md:text-sm leading-5 text-gray-900 whitespace-nowrap border-b border-gray-200 md:px-4">
        {item.reservation_id}
      </td>
      <td className="px-2 py-4 text-[10px] md:text-sm leading-5 text-gray-900 whitespace-nowrap border-b border-gray-200 md:px-4">
        {new Date(item.reservation_date).toLocaleDateString()}
      </td>
      <td className="px-2 py-4 text-[10px] md:text-sm leading-5 text-gray-900 whitespace-nowrap border-b border-gray-200 md:px-4">
        {item.patient_name}
      </td>
      <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-200 md:px-4">
        <span
          className={`inline-flex px-4 py-1 text-[10px] md:text-sm font-semibold leading-5 rounded-full ${
            statusColors[item.status]
          }`}
        >
          {item.status}
        </span>
      </td>
      <td className="px-2 py-4 text-[10px] md:text-sm leading-5 text-gray-900 whitespace-no-wrap border-b border-gray-200 md:px-4">
        {item.complaint}
      </td>
      <td className="px-2 py-4 text-[10px] md:text-sm leading-5 text-gray-900 whitespace-no-wrap border-b border-gray-200 md:px-4">
        <button
          onClick={onEditClick}
          className="text-indigo-600  hover:text-indigo-900"
        >
          Edit
        </button>
        {isEditing && (
          <div className="aksi fixed right-8 z-50 w-48 py-2 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
            <button
              onClick={() => onStatusChange(item.reservation_id, "Proses")}
              className="block w-full px-4 py-2 text-left text-blue-700 hover:bg-gray-100"
            >
              Proses
            </button>
            <button
              onClick={() => onStatusChange(item.reservation_id, "Selesai")}
              className="block w-full px-4 py-2 text-left text-green-700 hover:bg-gray-100"
            >
              Selesai
            </button>
            <button
              onClick={() => onStatusChange(item.reservation_id, "Batal")}
              className="block w-full px-4 py-2 text-left text-red-700 hover:bg-gray-100"
            >
              Batal
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};

const DaftarAntrian = () => {
  const [data, setData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "https://api-msib-6-klinik-app-04.educalab.id/api/v1/doctor/reservation",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const reservations = response.data[0]?.doctor[0]?.reservation.map(
        (reservation) => ({
          reservation_id: reservation.reservation_id,
          reservation_date: reservation.reservation_date,
          patient_name: reservation.patient_name,
          complaint: reservation.complaint,
          status: reservation.status,
        })
      );

      setData(reservations);
    } catch (error) {
      console.error("Failed to fetch reservations:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    }
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      const token = localStorage.getItem("token");

      swal
        .fire({
          title: "Yakin merubah status?",
          text: false,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          cancelButtonText: "Tidak",
          confirmButtonText: "Ubah status",
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            try {
              await axios.patch(
                "https://api-msib-6-klinik-app-04.educalab.id/api/v1/reservation/update",
                { reservation_id: id, status: newStatus },
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );

              setData((prevData) =>
                prevData.map((item) =>
                  item.reservation_id === id
                    ? { ...item, status: newStatus }
                    : item
                )
              );
              setEditingIndex(null);

              swal.fire({
                title: "Tersimpan!",
                text: "Berhasil ubah status antrian!",
                icon: "success",
                timer: 2000,
                showConfirmButton: false,
              });
            } catch (error) {
              swal.fire({
                title: "Gagal!",
                text: "Terjadi kesalahan saat ubah status!",
                icon: "error",
                timer: 2000,
                showConfirmButton: false,
              });

              console.error("Failed to update status:", error);
              if (error.response) {
                console.error("Response data:", error.response.data);
                console.error("Response status:", error.response.status);
                console.error("Response headers:", error.response.headers);
              } else if (error.request) {
                console.error("Request data:", error.request);
              } else {
                console.error("Error message:", error.message);
              }
            }
          }
        });
    } catch (error) {
      console.error("Failed to show confirmation dialog:", error);
    }
  };

  const handleEditClick = (index) => {
    setEditingIndex(index);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const headers = [
    "No.",
    "Reservasi",
    "Tanggal",
    "Pasien",
    "Status",
    "Keluhan",
    "Aksi",
  ];

  const filteredData = data.filter(
    (item) =>
      item.patient_name &&
      item.patient_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
      <div className="container px-3 sm:px-4 md:px-6 py-8 mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-700">
          Daftar Antrian
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
            <TableRow
              key={item.reservation_id}
              item={item}
              index={index + 1}
              isEditing={editingIndex === index}
              onEditClick={() => handleEditClick(index)}
              onStatusChange={handleStatusChange}
            />
          ))}
        </Table>
      </div>
    </div>
  );
};

export default DaftarAntrian;
