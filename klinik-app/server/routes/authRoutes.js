const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/login", authController.login);
router.post("/registrasi", authController.login);
router.get("/profile", authController.profile);
router.delete("/logout", authController.logout);

module.exports = router;
