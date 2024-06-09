const jwt = require('jsonwebtoken');

function createToken(user) {

    const payload = {
        id: user.id,
        email: user.email,
        role: user.role
    };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

}

module.exports = { createToken }