const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');
const authMiddleware = require('../middleware/authMiddleware');
const doctorMiddleware = require('../middleware/doctorMiddleware');

router.post('/reservation/create', authMiddleware, reservationController.createReservation);
router.get('/reservation', authMiddleware, reservationController.getReservation);
router.get('/reservation/doctor', authMiddleware, doctorMiddleware, reservationController.getReservationbyDoctor);
router.patch('/reservation/update', authMiddleware, reservationController.updateStatusReservation);
router.post('/create/review', authMiddleware, reservationController.createReview);
router.get('/reservation/review', authMiddleware, reservationController.getPatientReview);

module.exports = router