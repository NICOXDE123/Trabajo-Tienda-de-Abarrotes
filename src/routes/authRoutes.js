
// src/routes/authRoutes.js

const express = require("express");
const { registrarUsuario, login } = require("../controllers/authController.js");
const { protegerRuta, soloAdmin } = require("../middlewares/authMiddleware.js");

const router = express.Router();

// Solo ADMIN puede registrar nuevos usuarios
router.post("/register", protegerRuta, soloAdmin, registrarUsuario);

router.post("/login", login);

module.exports = router;
