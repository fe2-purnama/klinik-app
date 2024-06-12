const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'secret_key';

const authenticateToken = async (req, res, next) => {
    const bearerToken = req.headers.authorization;
    if (!bearerToken) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const token = bearerToken.split('Bearer ')[1];

    jwt.verify(token, JWT_SECRET, (err, payload) => {
        if (err) {
            if (err.name === 'TokenExpiredError') {
                return res.status(401).json({ message: 'Token expired' });
            }
            return res.status(401).json({ message: 'Invalid token' });
        }

        req.user_id = payload.id;
        next();
    });
};

module.exports = authenticateToken;
