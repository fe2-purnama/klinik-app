import React, { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Button, Modal } from "flowbite-react";
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };

  const handleDelete = () => {
    console.log(`Deleting reservation with ID ${selectedId}`);
    setOpenModal(false);
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
          {data.map((data, index) => (
            <TableRow key={index}>
              <TableCell className="whitespace-nowrap font-medium text-gray-900">
                {index + 1}
              </TableCell>
              <TableCell>{data.id_reservation}</TableCell>
              <TableCell>{formatDate(data.created_at)}</TableCell>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.doctor}</TableCell>
              <TableCell>{data.spesialist}</TableCell>
              <TableCell>{data.status}</TableCell>
              <TableCell>{data.keluhan}</TableCell>
              <TableCell>
                <button
                  onClick={() => {
                    setSelectedId(data.id_reservation);
                    setOpenModal(true);
                  }}
                  className="font-medium text-red-600 hover:underline cursor-pointer"
                >
                  batal
                </button>
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
