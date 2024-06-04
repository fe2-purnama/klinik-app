const jwt = require('jsonwebtoken');

const generateToken = (id, role) => {
    return jwt.sign({ id, role }, 'secretkey', {
        expiresIn: '1h'
    });
};

module.exports = generateToken;
