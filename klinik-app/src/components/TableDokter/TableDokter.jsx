/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

const dokter = [
  {
    str: "00000007878011999",
    dokter: "Dr. Andi Wijaya",
    jenis_kelamin: "Laki-laki",
    spesialis: "Kardiologi",
    no_hp: "083423432231",
    pengalaman: "4",
  },
  {
    str: "00000007878011999",
    dokter: "Dr. Andi Wijaya",
    jenis_kelamin: "Laki-laki",
    spesialis: "Kardiologi",
    no_hp: "083423432231",
    pengalaman: "4",
  },
  {
    str: "00000007878011999",
    dokter: "Dr. Andi Wijaya",
    jenis_kelamin: "Laki-laki",
    spesialis: "Kardiologi",
    no_hp: "083423432231",
    pengalaman: "4",
  },
  {
    str: "00000007878011999",
    dokter: "Dr. Andi Wijaya",
    jenis_kelamin: "Laki-laki",
    spesialis: "Kardiologi",
    no_hp: "083423432231",
    pengalaman: "4",
  },
  {
    str: "00000007878011999",
    dokter: "Dr. Andi Wijaya",
    jenis_kelamin: "Laki-laki",
    spesialis: "Kardiologi",
    no_hp: "083423432231",
    pengalaman: "4",
  },
  {
    str: "00000007878011999",
    dokter: "Dr. Andi Wijaya",
    jenis_kelamin: "Laki-laki",
    spesialis: "Kardiologi",
    no_hp: "083423432231",
    pengalaman: "4",
  },
  {
    str: "00000007878011999",
    dokter: "Dr. Andi Wijaya",
    jenis_kelamin: "Laki-laki",
    spesialis: "Kardiologi",
    no_hp: "083423432231",
    pengalaman: "4",
  },
  {
    str: "00000007878011999",
    dokter: "Dr. Andi Wijaya",
    jenis_kelamin: "Laki-laki",
    spesialis: "Kardiologi",
    no_hp: "083423432231",
    pengalaman: "4",
  },
  {
    str: "00000007878011999",
    dokter: "Dr. Andi Wijaya",
    jenis_kelamin: "Laki-laki",
    spesialis: "Kardiologi",
    no_hp: "083423432231",
    pengalaman: "4",
  },
  {
    str: "00000007878011999",
    dokter: "Dr. Andi Wijaya",
    jenis_kelamin: "Laki-laki",
    spesialis: "Kardiologi",
    no_hp: "083423432231",
    pengalaman: "4",
  },
  {
    str: "00000007878011999",
    dokter: "Dr. Andi Wijaya",
    jenis_kelamin: "Laki-laki",
    spesialis: "Kardiologi",
    no_hp: "083423432231",
    pengalaman: "4",
  },
  {
    str: "00000007878011999",
    dokter: "Dr. Andi Wijaya",
    jenis_kelamin: "Laki-laki",
    spesialis: "Kardiologi",
    no_hp: "083423432231",
    pengalaman: "4",
  },
  {
    str: "00000007878011999",
    dokter: "Dr. Andi Wijaya",
    jenis_kelamin: "Laki-laki",
    spesialis: "Kardiologi",
    no_hp: "083423432231",
    pengalaman: "4",
  },
];

const TableDokter = () => {
  return (
    <Table className="border-none drop-shadow-none">
      <TableHead>
        <TableHeadCell>No</TableHeadCell>
        <TableHeadCell>STR</TableHeadCell>
        <TableHeadCell>Dokter</TableHeadCell>
        <TableHeadCell>Jenis Kelamin</TableHeadCell>
        <TableHeadCell>Spesialis</TableHeadCell>
        <TableHeadCell>No Handphone</TableHeadCell>
        <TableHeadCell>Pengalaman</TableHeadCell>
        <TableHeadCell>
          <span>Aksi</span>
        </TableHeadCell>
      </TableHead>
      <TableBody>
        {dokter.map((dokter, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium text-gray-900 text-center">
              {index + 1}
            </TableCell>
            <TableCell className="text-center">{dokter.str}</TableCell>
            <TableCell className="text-center">{dokter.dokter}</TableCell>
            <TableCell className="text-center">
              {dokter.jenis_kelamin}
            </TableCell>
            <TableCell className="text-center">{dokter.spesialis}</TableCell>
            <TableCell className="text-center">{dokter.no_hp}</TableCell>
            <TableCell className="text-center">{dokter.pengalaman}</TableCell>
            <TableCell className="text-center">
              <button className="bg-sky-500 px-2 py-1 rounded mr-2">
                <i className="text-white fas fa-pen"></i>
                <Link to="/edit-akun-dokter"></Link>
              </button>
              <button className="bg-red-600 px-2 py-1 rounded">
                <i className="text-white fas fa-trash"></i>
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableDokter;
