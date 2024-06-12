const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const adminController = require('../controllers/adminController');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/me', authMiddleware, authController.getUser);
router.patch('/update', authMiddleware, authController.updateUser);


router.post('/admin/register', adminController.createAdmin);

module.exports = router;