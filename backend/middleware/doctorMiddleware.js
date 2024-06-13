const { PrismaClient } = require('./../prisma/client');
const prisma = new PrismaClient();

const doctorMiddleware = async (req, res, next) => {
    try {
        const doctor = await prisma.auth.findUnique({
            where: {
                user_id: req.user_id
            },
            select: {
                doctor: {
                    select: {
                        doctor_id: true
                    }
                }
            }
        });

        if (!doctor) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.doctor_id = doctor.doctor.doctor_id;
        next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = doctorMiddleware