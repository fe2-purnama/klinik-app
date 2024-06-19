import React, { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

function DaftarReviewPasien() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const token = localStorage.getItem("token");

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return date.toLocaleDateString("id-GB", options);
  };

  const getReviews = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://api-msib-6-klinik-app-04.educalab.id/api/v1/reservation/review",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setData(response.data[0].patient.reservation);
      console.log(response.data[0].patient.reservation);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div>
      <h1 className="text-md md:text-2xl font-semibold mb-5">
        Daftar Review Anda
      </h1>
      {loading ? (
        <div>
          <span className="text-lg">Loading...</span>
          <Spinner aria-label="Extra large spinner example" size="xl" />
        </div>
      ) : (
        <div className="overflow-x-auto">
          <Table>
            <TableHead>
              <TableHeadCell>No</TableHeadCell>
              <TableHeadCell>ID Reservasi</TableHeadCell>
              <TableHeadCell>Tanggal Reservasi</TableHeadCell>
              <TableHeadCell>Nama Pasien</TableHeadCell>
              <TableHeadCell>Dokter</TableHeadCell>
              <TableHeadCell>Keluhan</TableHeadCell>
              <TableHeadCell>Review</TableHeadCell>
            </TableHead>
            <TableBody className="divide-y">
              {data &&
                data
                  .filter((item) => item.review && item.review.length > 0)
                  .map((data, index) => (
                    <TableRow key={index} className="bg-white">
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{data.reservation_id}</TableCell>
                      <TableCell>{formatDate(data.reservation_date)}</TableCell>
                      <TableCell>{data.patient_name}</TableCell>
                      <TableCell>{data.doctor_name}</TableCell>
                      <TableCell>{data.complaint}</TableCell>
                      <TableCell>{data.review[0].review}</TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}

export default DaftarReviewPasien;
