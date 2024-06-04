const express = require("express");
const router = express.Router();
const { verifyUser, adminOnly } = require("../middleware/authMiddleware");
const userController = require("../controllers/userController");

//admin
router.post("/admin", verifyUser, adminOnly, userController.createUsers);
router.get("/admin/patient", verifyUser, adminOnly, userController.getPatient);
router.get("/admin/doctor", verifyUser, adminOnly, userController.getDoctor);
router.get("/admin/:id", verifyUser, adminOnly, userController.getUsersById);
router.patch("/admin/:id", verifyUser, adminOnly, userController.updateUsers);
router.delete("/admin/:id", verifyUser, adminOnly, userController.deleteUsers);

module.exports = router;
