const express = require("express");
const { reporteVentasPorRango } = require("../controllers/reportController.js");
const { protegerRuta, soloAdmin } = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.get("/ventas", protegerRuta, soloAdmin, reporteVentasPorRango);

module.exports = router;