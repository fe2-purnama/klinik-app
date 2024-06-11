const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/doctor/register', authMiddleware, doctorController.createDoctor);
router.get('/doctor', authMiddleware, doctorController.getDoctor);
router.patch('/doctor/update', authMiddleware, doctorController.updateDoctor);
router.delete('/doctor/delete', authMiddleware, doctorController.deleteDoctor);
router.get('/doctor/profile', authMiddleware, doctorController.getDoctorbyId);
router.get('/doctor/detail/:user_id', doctorController.getDoctorbyUserId);
router.get('/doctor/review', authMiddleware, doctorController.getDoctorReview);
router.get('/doctor/reservation', authMiddleware, doctorController.getReservationbyDoctor);

router.get('/doctor/all', doctorController.getAllDoctor);

module.exports = router;