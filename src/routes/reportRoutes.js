// src/routes/reportRoutes.js
const express = require("express");
const { ventasPorDia } = require("../controllers/reportController");
const { protegerRuta, soloAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/ventas-por-dia", protegerRuta, soloAdmin, ventasPorDia);

module.exports = router;
