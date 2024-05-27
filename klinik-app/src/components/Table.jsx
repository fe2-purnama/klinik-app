import React, { useState, useEffect } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

const reservations = [
  {
    no_reservasi: "RSV001",
    tanggal: "2024-05-20",
    nama_pasien: "Andi Pratama",
    dokter: "Dr. Budi Santoso",
    spesialis: "Kardiologi",
    status: "Selesai",
    keluhan: "Nyeri dada",
  },
  {
    no_reservasi: "RSV002",
    tanggal: "2024-05-21",
    nama_pasien: "Siti Nurhaliza",
    dokter: "Dr. Rina Hartati",
    spesialis: "Dermatologi",
    status: "Menunggu",
    keluhan: "Ruam kulit",
  },
  {
    no_reservasi: "RSV003",
    tanggal: "2024-05-22",
    nama_pasien: "Bambang Sutrisno",
    dokter: "Dr. Agus Wijaya",
    spesialis: "Ortopedi",
    status: "Dibatalkan",
    keluhan: "Sakit lutut",
  },
  {
    no_reservasi: "RSV004",
    tanggal: "2024-05-23",
    nama_pasien: "Rina Sari",
    dokter: "Dr. Dian Kusuma",
    spesialis: "Pediatri",
    status: "Selesai",
    keluhan: "Demam tinggi",
  },
  {
    no_reservasi: "RSV005",
    tanggal: "2024-05-24",
    nama_pasien: "Ahmad Yani",
    dokter: "Dr. Hendra Wibowo",
    spesialis: "Gastroenterologi",
    status: "Menunggu",
    keluhan: "Sakit perut",
  },
  {
    no_reservasi: "RSV005",
    tanggal: "2024-05-24",
    nama_pasien: "Ahmad Yani",
    dokter: "Dr. Hendra Wibowo",
    spesialis: "Gastroenterologi",
    status: "Menunggu",
    keluhan: "Sakit perut",
  },
  {
    no_reservasi: "RSV005",
    tanggal: "2024-05-24",
    nama_pasien: "Ahmad Yani",
    dokter: "Dr. Hendra Wibowo",
    spesialis: "Gastroenterologi",
    status: "Menunggu",
    keluhan: "Sakit perut",
  },
  {
    no_reservasi: "RSV005",
    tanggal: "2024-05-24",
    nama_pasien: "Ahmad Yani",
    dokter: "Dr. Hendra Wibowo",
    spesialis: "Gastroenterologi",
    status: "Menunggu",
    keluhan: "Sakit perut",
  },
  {
    no_reservasi: "RSV005",
    tanggal: "2024-05-24",
    nama_pasien: "Ahmad Yani",
    dokter: "Dr. Hendra Wibowo",
    spesialis: "Gastroenterologi",
    status: "Menunggu",
    keluhan: "Sakit perut",
  },
];

export default function Component() {
  return (
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
        {reservations.map((reservation, index) => (
          <TableRow key={index}>
            <TableCell className="whitespace-nowrap font-medium text-gray-900">
              {index + 1}
            </TableCell>
            <TableCell>{reservation.no_reservasi}</TableCell>
            <TableCell>{reservation.tanggal}</TableCell>
            <TableCell>{reservation.nama_pasien}</TableCell>
            <TableCell>{reservation.dokter}</TableCell>
            <TableCell>{reservation.spesialis}</TableCell>
            <TableCell>{reservation.status}</TableCell>
            <TableCell>{reservation.keluhan}</TableCell>
            <TableCell>
              <a
                onClick={() => alert("batal")}
                className="font-medium text-red-600 hover:underline"
              >
                batal
              </a>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
