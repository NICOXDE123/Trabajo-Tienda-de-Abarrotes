// src/routes/saleRoutes.js
const express = require("express");
const { registrarVenta, listarVentas } = require("../controllers/saleController");
const { protegerRuta } = require("../middlewares/authMiddleware");

const router = express.Router();

// Registrar venta (VENDEDOR o ADMIN)
router.post("/", protegerRuta, registrarVenta);

// Listar ventas (en un mundo real solo ADMIN, aquí protegido genérico)
router.get("/", protegerRuta, listarVentas);

module.exports = router;
