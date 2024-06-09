/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react';

const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImVtYWlsIjoiYWRtaW4iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTc5MjU3NjksImV4cCI6MTcxNzkyOTM2OX0.uL9jkY52medRyqrnnBCgbMk_T7PYN5adyRyH7o8Sayw';
const apiUrl = 'http://localhost:5000/api/v1/doctor';

// Setup axios interceptor
axios.interceptors.request.use(
  (config) => {
    config.headers.authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const TableDokter = ({ filterStr }) => {
  const [items, setItems] = useState([]);
  const [requestError, setRequestError] = useState();

  // Fetch data function
  const fetchData = useCallback(async () => {
    try {
      const result = await axios.get(apiUrl);
      setItems(result.data); // Save API data to state
    } catch (err) {
      setRequestError(err.message);
    }
  }, []);

  // Fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const filteredItems = items.filter((item) => item.doctor_id.includes(filterStr));

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
      <TableBody className="bg-white">
        {filteredItems.map((item, index) => (
          <TableRow key={item.user_id}>
            <TableCell className="font-medium text-gray-900 text-center">{index + 1}</TableCell>
            <TableCell>{item.doctor_id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.gender}</TableCell>
            <TableCell>{item.specialization}</TableCell>
            <TableCell>{item.phone_number}</TableCell>
            <TableCell className="text-center">{item.experience}</TableCell>
            <TableCell className="">
              <Link to={`/admin/edit/${item.user_id}`}>
                {/* Menambahkan ID dokter ke URL */}
                <button className="bg-sky-500 px-2 py-1 rounded mr-2 hover:bg-sky-600 shadow-none">
                  <i className="text-white fas fa-pen"></i>
                </button>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableDokter;
