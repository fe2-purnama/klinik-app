const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

router.get('/reservations', reservationController.getReservations);
router.get('/reservations/id/:id', reservationController.getReservationById);
router.get('/reservations/user/:id', reservationController.getReservationsByUserId);
router.get('/reservations/doctor/:id', reservationController.getReservationsByDoctorId);
router.post('/reservations', reservationController.createReservation);
router.put('/reservations/:id', reservationController.updateReservation);
router.delete('/reservations/:id', reservationController.deleteReservation);

module.exports = router;
