const { PrismaClient } = require('./../prisma/client');
const { sendEmail } = require('../utils/sendEmail');

const prisma = new PrismaClient();

const createReservation = async (req, res) => {
    try {
        const { doctor_id, doctor_name, specialization, patient_name, nik, ttl, gender, phone_number, address, reservation_date, complaint } = req.body;

        // Function to generate reservation ID
        const generateReservationId = async () => {
            try {
                const lastReservation = await prisma.reservation.findFirst({
                    orderBy: { reservation_id: 'desc' },
                });

                let newIdNumber = 240000; // Default starting number
                if (lastReservation) {
                    newIdNumber = parseInt(lastReservation.reservation_id.slice(2)) + 1;
                }

                return `RD${newIdNumber}`;
            } catch (error) {
                throw new Error('Failed to generate reservation ID: ' + error.message);
            }
        };


        // Validation and generation of reservation ID
        const reservation_id = await generateReservationId();

        // Validation of status
        const validStatuses = ['Menunggu', 'Proses', 'Selesai', 'Batal'];
        const status = 'Menunggu'; // Set default status or retrieve from request body
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ error: 'Invalid reservation status' });
        }

        // Convert reservation_date to ISO string
        const isoDate = new Date(reservation_date).toISOString();

        // Create reservation
        const reservation = await prisma.reservation.create({
            data: {
                reservation_id,
                patient_id: req.user_id,
                doctor_id,
                doctor_name,
                specialization,
                patient_name,
                nik,
                ttl,
                gender,
                phone_number,
                address,
                reservation_date: isoDate,
                complaint,
                status,
            },
        });

        res.status(200).json({ message: 'Reservation created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const getReservation = async (req, res) => {

    try {
        const reservation = await prisma.reservation.findMany({
            where: {
                patient_id: req.user_id
            },
            select: {
                reservation_id: true,
                doctor_id: true,
                doctor_name: true,
                specialization: true,
                patient_name: true,
                nik: true,
                ttl: true,
                gender: true,
                phone_number: true,
                address: true,
                reservation_date: true,
                complaint: true,
                status: true,
                review: true
            }
        });
        res.status(200).json(reservation);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getReservationbyDoctor = async (req, res) => {

    try {
        const reservationDoctor = await prisma.reservation.findMany({
            where: {
                doctor_id: req.doctor_id
            }
        });
        res.status(200).json(reservationDoctor);

    } catch (error) {

    }
}

const updateStatusReservation = async (req, res) => {

    const { reservation_id, status } = req.body;

    try {
        const reservation = await prisma.reservation.update({
            where: {
                reservation_id: reservation_id
            },
            data: {
                status: status
            }
        });

        const email = await prisma.auth.findUnique({
            where: {
                user_id: reservation.patient_id
            },
            select: {
                email: true
            }
        });

        const { email: userEmail } = email;

        sendEmail(userEmail, status);

        res.status(200).json({ message: 'Reservation updated successfully' });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createReview = async (req, res) => {

    const { reservation_id, doctor_id, review } = req.body;

    try {
        const dataReview = await prisma.review.create({
            data: {
                reservation_id,
                doctor_id,
                review
            }
        });
        res.status(200).json({ message: 'Review created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

const getPatientReview = async (req, res) => {
    try {
        const doctor = await prisma.auth.findMany({
            where: {
                user_id: req.user_id,
            },
            select: {
                patient: {
                    select: {
                        reservation: {
                            select: {
                                reservation_id: true,
                                reservation_date: true,
                                patient_name: true,
                                doctor_name: true,
                                complaint: true,
                                review: {
                                    select: {
                                        review: true
                                    }
                                }
                            }
                        }
                    }


                }
            },
        })
        res.status(200).json(doctor)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { createReservation, getReservation, getReservationbyDoctor, updateStatusReservation, createReview, getPatientReview };