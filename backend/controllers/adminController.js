const { PrismaClient } = require('./../prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

const createAdmin = async (req, res) => {
    const { email, password, name } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const admin = await prisma.auth.create({
            data: {
                email,
                password: hashedPassword,
                role: 'admin',
                admin: {
                    create: {
                        name
                    }
                }
            }
        });
        res.status(201).json({ message: 'Admin created successfully' });
    } catch (error) {
        if (error.code === 'P2002') {
            res.status(400).json({ error: 'Email already exists' });
        } else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = { createAdmin }