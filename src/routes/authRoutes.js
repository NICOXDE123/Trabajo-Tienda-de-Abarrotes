// src/routes/authRoutes.js
const express = require("express");
const { login, registrarUsuario } = require("../controllers/authController");
const { protegerRuta, soloAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();

// Login público
router.post("/login", login);

// Registro solo para ADMIN (después de crear el primer admin con el script)
router.post("/register", protegerRuta, soloAdmin, registrarUsuario);

module.exports = router;
