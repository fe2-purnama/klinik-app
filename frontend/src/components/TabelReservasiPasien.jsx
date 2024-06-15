import React, { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Button,
  Modal,
} from "flowbite-react";

export default function Component(props) {
  const { data } = props;
  const [openModal, setOpenModal] = useState(false);
  const [OpenModalReview, setOpenModalReview] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);
  const [review, setReview] = useState(null);

  const token = localStorage.getItem("token");

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

  const statusColors = {
    Menunggu: "text-yellow-800 bg-yellow-100",
    Proses: "text-blue-800 bg-blue-100",
    Selesai: "text-green-800 bg-green-100",
    Batal: "text-red-800 bg-red-100",
  };

  const handleDelete = async () => {
    try {
      const response = await axios.patch(
        `https://api-msib-6-klinik-app-04.educalab.id/api/v1/reservation/update`,
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

  const handleReview = (e) => {
    setReview(e.target.value);
    console.log(review);
  };

  const handleCreateReview = async () => {
    try {
      const response = await axios.post(
        `https://api-msib-6-klinik-app-04.educalab.id/api/v1/create/review`,
        {
          reservation_id: `${selectedId}`,
          doctor_id: `${selectedDoctorId}`,
          review: `${review}`,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error(error);
    } finally {
      setOpenModalReview(false);
      setSelectedId(null);
      setSelectedDoctorId(null);
      window.location.reload();
    }
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
        <TableBody className="divide-y ">
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
                  className={`inline-flex px-4 py-1 text-xs font-semibold leading-5 rounded-full ${
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
                {data.status === "Selesai" && data.review[0] === undefined && (
                  <button
                    className="font-medium text-blue-600 hover:underline cursor-pointer"
                    onClick={() => {
                      setSelectedId(data.reservation_id);
                      setSelectedDoctorId(data.doctor_id);
                      console.log(selectedId);
                      console.log(selectedDoctorId);
                      console.log(data);
                      setOpenModalReview(true);
                    }}
                  >
                    review
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

      <Modal
        show={OpenModalReview}
        size="md"
        onClose={() => setOpenModalReview(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Kirim Review Anda Setelah Konsultasi
            </h3>
            <textarea
              className="w-full h-40 border text-md border-gray-300 rounded-lg p-2 text-gray-900 focus:outline-none focus:ring-sky-500 focus:border-sky-500"
              placeholder="Masukkan review anda"
              onChange={handleReview}
            ></textarea>
            <div className="flex flex-col">
              <button
                className="bg-sky-500 hover:bg-sky-700 text-white py-2 px-4 rounded-lg"
                onClick={handleCreateReview}
              >
                Berikan review
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
