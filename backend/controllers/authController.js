const { PrismaClient } = require('./../prisma/client');
const bcrypt = require('bcrypt');
const { createToken } = require('../utils/createToken');

const prisma = new PrismaClient();

const register = async (req, res) => {
    const { email, password, name, phone_number } = req.body;
    const user_role = 'patient';

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        // Buat user baru dan profil yang berelasi
        const auth = await prisma.auth.create({
            data: {
                email,
                password: hashedPassword,
                role: user_role,
                patient: {
                    create: {
                        name,
                        phone_number
                    }
                },

            },
        });

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        if (error.code === 'P2002') {
            res.status(400).json({ error: 'Email already exists' });
        } else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await prisma.auth.findUnique({ where: { email } });
    if (!user) return res.status(404).send({ message: 'User not found' });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).send({ message: 'Invalid password' });

    const payload = {
        id: user.user_id,
        email: user.email,
        role: user.role
    };

    const token = createToken(payload);

    res.status(200).json({
        status: 'success',
        message: 'Login successful',
        role: user.role,
        token
    });
}

const getUser = async (req, res) => {
    try {
        const user = await prisma.auth.findUnique({
            where: {
                user_id: req.user_id,
            },
            select: {
                user_id: true,
                email: true,
                patient: {
                    select: {
                        name: true,
                        phone_number: true
                    }
                }
            },
        });

        res.status(200).json(user);
    } catch (error) {
    }
}

const updateUser = async (req, res) => {

    const { name, password, email, phone_number } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = await prisma.auth.update({
            where: {
                user_id: req.user_id
            },
            data: {
                email: email,
                password: hashedPassword,
                patient: {
                    update: {
                        name: name,
                        phone_number: phone_number,
                    }
                }
            }
        });
        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { register, login, getUser, updateUser };