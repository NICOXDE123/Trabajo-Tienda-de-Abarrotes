const express = require("express");
const {
  registrarVenta,
  obtenerVentasRecientes
} = require("../controllers/saleController.js");

const { protegerRuta } = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.post("/", protegerRuta, registrarVenta);
router.get("/recientes", protegerRuta, obtenerVentasRecientes);

module.exports = router;
