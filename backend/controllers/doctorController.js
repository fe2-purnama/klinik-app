const { PrismaClient } = require('./../prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

const createDoctor = async (req, res) => {

    const { doctor_id, name, gender, password, confirm_password, email, phone_number, experience, specialization, imgUrl, role = 'doctor' } = req.body;

    if (password !== confirm_password) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const doctor = await prisma.auth.create({
            data: {
                email,
                password: hashedPassword,
                role,
                doctor: {
                    create: {
                        doctor_id,
                        name,
                        gender,
                        phone_number,
                        experience,
                        specialization,
                        imgUrl
                    }
                }
            },
        });
        res.status(201).json({ message: 'Doctor created successfully' });
    } catch (error) {
        if (error.code === 'P2002') {
            res.status(400).json({ error: 'Email or ID doctor already exists' });
        } else {
            res.status(404).json({ error: error.message });
        }
    }
}

const getDoctor = async (req, res) => {
    try {
        const doctor = await prisma.doctor.findMany();
        res.json(doctor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateDoctor = async (req, res) => {
    const { user_id, doctor_id, name, gender, phone_number, experience, specialization, email, password, confirm_password, imgUrl } = req.body;

    if (password !== confirm_password) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const doctor = await prisma.doctor.update({
            where: {
                user_id: user_id,
                doctor_id: doctor_id
            },
            data: {
                doctor_id: doctor_id,
                name: name,
                gender: gender,
                experience: experience,
                phone_number: phone_number,
                specialization: specialization,
                experience: experience,
                imgUrl: imgUrl,
                auth: {
                    update: {
                        email: email,
                        password: hashedPassword
                    }
                }
            }
        });
        res.status(200).json({ message: 'Doctor updated successfully', doctor });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const deleteDoctor = async (req, res) => {

    const { user_id, doctor_id } = req.body;
    try {
        const doctor = await prisma.doctor.delete({
            where: {
                user_id: user_id,
                doctor_id: doctor_id
            }
        });
        res.status(200).json({ message: 'Doctor deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getDoctorbyId = async (req, res) => {
    try {
        const doctor = await prisma.auth.findUnique({
            where: {
                user_id: req.user_id,
            },
            select: {
                user_id: true,
                email: true,
                doctor: {
                    select: {
                        doctor_id: true,
                        name: true,
                        gender: true,
                        phone_number: true,
                        experience: true,
                        specialization: true,
                    }
                }
            },
        });

        res.status(200).json(doctor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getDoctorbyUserId = async (req, res) => {
    const { user_id } = req.params;
    const userIdInt = parseInt(user_id, 10)
    try {
        const doctor = await prisma.auth.findUnique({
            where: {
                user_id: userIdInt,
            },
            select: {
                user_id: true,
                email: true,
                doctor: {
                    select: {
                        doctor_id: true,
                        name: true,
                        gender: true,
                        phone_number: true,
                        experience: true,
                        specialization: true,
                        imgUrl: true
                    }
                }
            },
        });

        res.status(200).json(doctor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getReservationbyDoctor = async (req, res) => {

    try {
        const reservationDoctor = await prisma.auth.findMany({
            where: {
                user_id: req.user_id,
            },
            select: {
                doctor: {
                    select: {
                        reservation: {
                            select: {
                                reservation_id: true,
                                reservation_date: true,
                                patient_name: true,
                                status: true,
                                complaint: true,
                            }
                        }
                    }


                }
            },
        });
        res.status(200).json(reservationDoctor);

    } catch (error) {

    }
}

const getDoctorReview = async (req, res) => {
    try {
        const doctor = await prisma.auth.findMany({
            where: {
                user_id: req.user_id,
            },
            select: {
                doctor: {
                    select: {
                        reservation: {
                            select: {
                                reservation_id: true,
                                reservation_date: true,
                                patient_name: true,
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

const getAllDoctor = async (req, res) => {
    try {
        const doctor = await prisma.doctor.findMany({
            select: {
                user_id: true,
                doctor_id: true,
                name: true,
                gender: true,
                phone_number: true,
                experience: true,
                specialization: true,
                imgUrl: true
            }
        });
        res.json(doctor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createDoctor,
    getDoctor,
    updateDoctor,
    deleteDoctor,
    getDoctorbyId,
    getDoctorReview,
    getAllDoctor,
    getDoctorbyUserId,
    getReservationbyDoctor
};