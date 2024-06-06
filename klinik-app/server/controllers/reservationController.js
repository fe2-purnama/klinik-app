const db = require("../config/db");
const Reservation = require("../models/reservation");
const Auth = require("../models/user");

const getReservations = async (req, res) => {
  try {
    const response = await Reservation.findAll({
      attributes: ["id_reservation", "id_user", "id_doctor", "doctor", "spesialist", "name", "nik", "ttl", "jk", "phone", "alamat", "tgl_reservasi", "keluhan", "status", "created_at"],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getReservationById = async (req, res) => {
  try {
    const response = await Reservation.findOne({
      attributes: ["id_reservation", "id_user", "id_doctor", "doctor", "spesialist", "name", "nik", "ttl", "jk", "phone", "alamat", "tgl_reservasi", "keluhan", "status", "created_at"],
      where: {
        id_reservation: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getReservationsByUserId = async (req, res) => {
  try {
    const response = await Reservation.findAll({
      attributes: ["id_reservation", "id_user", "id_doctor", "doctor", "spesialist", "name", "nik", "ttl", "jk", "phone", "alamat", "tgl_reservasi", "keluhan", "status", "created_at"],
      where: {
        id_user: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getReservationsByDoctorId = async (req, res) => {
  try {
    const response = await Reservation.findAll({
      attributes: ["id_reservation", "id_user", "id_doctor", "doctor", "spesialist", "name", "nik", "ttl", "jk", "phone", "alamat", "tgl_reservasi", "keluhan", "status", "created_at"],
      where: {
        id_doctor: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const createReservation = async (req, res) => {
  const { id_user, id_doctor, doctor, spesialist, name, nik, ttl, jk, phone, alamat, tgl_reservasi, keluhan } = req.body;
  try {
    await Reservation.create({
      id_user: id_user,
      id_doctor: id_doctor,
      doctor: doctor,
      spesialist: spesialist,
      name: name,
      nik: nik,
      ttl: ttl,
      jk: jk,
      phone: phone,
      alamat: alamat,
      tgl_reservasi: tgl_reservasi,
      keluhan: keluhan,
    });
    res.status(201).json({ msg: "Reservasi berhasil dibuat" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const updateReservation = async (req, res) => {
  const reservation = await Reservation.findOne({
    where: {
      id_reservation: req.params.id,
    },
  });
  if (!reservation) return res.status(404).json({ msg: "Reservasi tidak ditemukan" });

  const { status } = req.body;

  try {
    await Reservation.update(
      {
        status: status,
      },
      {
        where: {
          id_reservation: reservation.id_reservation,
        },
      }
    );
    res.status(200).json({ msg: "Status reservasi berhasil diperbarui" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const deleteReservation = async (req, res) => {
  const reservation = await Reservation.findOne({
    where: {
      id_reservation: req.params.id,
    },
  });
  if (!reservation) return res.status(404).json({ msg: "Reservasi tidak ditemukan" });

  try {
    await Reservation.destroy({
      where: {
        id_reservation: reservation.id_reservation,
      },
    });
    res.status(200).json({ msg: "Reservasi berhasil dihapus" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = {
  getReservations,
  getReservationById,
  getReservationsByUserId,
  getReservationsByDoctorId,
  createReservation,
  updateReservation,
  deleteReservation,
};
