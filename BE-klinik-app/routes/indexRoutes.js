const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const doctorRoutes = require('./doctorRoutes');
const reservationRoutes = require('./reservationRoutes');

const apiUrl = '/api/v1';

router.use(apiUrl, authRoutes);
router.use(apiUrl, doctorRoutes);
router.use(apiUrl, reservationRoutes);

module.exports = router