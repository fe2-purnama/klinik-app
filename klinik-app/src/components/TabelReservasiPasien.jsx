import React, { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Button, Modal } from "flowbite-react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

export default function Component(props) {
  const { data } = props;
  const [openModal, setOpenModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImVtYWlsIjoicXdlcnR5MTIzQHF3ZXJ0eS5jb20iLCJyb2xlIjoicGF0aWVudCIsImlhdCI6MTcxNzkxNzQ5NSwiZXhwIjoxNzE3OTIxMDk1fQ.hQUzblvokTvB9IqcKL491nEgRhyRpPl9LFPJwE_ZgQE";

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return date.toLocaleDateString("id-GB", options);
  };

  const statusPriority = {
    Menunggu: 1,
    Proses: 2,
    Selesai: 3,
    Batal: 4,
  };

  const sortedData = data.sort((a, b) => {
    return statusPriority[a.status] - statusPriority[b.status];
  });
  const handleDelete = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/v1/reservation/update`,
        {
          reservation_id: `${selectedId}`,
          status: "Batal",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data.message);
      console.log(`Deleting reservation with ID ${selectedId}`);
    } catch (error) {
      console.error(error);
    } finally {
      setOpenModal(false);
      setSelectedId(null);
      window.location.reload();
    }
  };

  const statusColors = {
    Menunggu: "text-yellow-800 bg-yellow-100",
    Proces: "text-blue-800 bg-blue-100",
    Selesai: "text-green-800 bg-green-100",
    Batal: "text-red-800 bg-red-100",
  };

  return (
    <>
      <Table className="border-none drop-shadow-none">
        <TableHead>
          <TableHeadCell>No</TableHeadCell>
          <TableHeadCell>No Reservasi</TableHeadCell>
          <TableHeadCell>Tanggal</TableHeadCell>
          <TableHeadCell>Nama Pasien</TableHeadCell>
          <TableHeadCell>Dokter</TableHeadCell>
          <TableHeadCell>Spesialis</TableHeadCell>
          <TableHeadCell>Status</TableHeadCell>
          <TableHeadCell>Keluhan</TableHeadCell>
          <TableHeadCell>
            <span className="sr-only">Edit</span>
          </TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {sortedData.map((data, index) => (
            <TableRow key={index}>
              <TableCell className="whitespace-nowrap font-medium text-gray-900">
                {index + 1}
              </TableCell>
              <TableCell>{data.reservation_id}</TableCell>
              <TableCell>{formatDate(data.reservation_date)}</TableCell>
              <TableCell>{data.patient_name}</TableCell>
              <TableCell>{data.doctor_name}</TableCell>
              <TableCell>{data.specialization}</TableCell>
              <TableCell>
                <span
                  className={`inline-flex px-4 py-1 text-xs font-semibold leading-5 rounded-full text-yellow-800 ${
                    statusColors[data.status]
                  }`}
                >
                  {data.status}
                </span>
              </TableCell>
              <TableCell>{data.complaint}</TableCell>
              <TableCell>
                {data.status === "Menunggu" && (
                  <button
                    onClick={() => {
                      setSelectedId(data.reservation_id);
                      setOpenModal(true);
                    }}
                    className="font-medium text-red-600 hover:underline cursor-pointer"
                  >
                    batal
                  </button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Modal */}

      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Apakah kamu yakin untuk membatalkan reservasi ini?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDelete}>
                Ya, Batalkan
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Tidak
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
