// src/routes/productRoutes.js
const express = require("express");
const {
  crearProducto,
  listarProductos,
  actualizarProducto,
  eliminarProducto
} = require("../controllers/productController.js");

const { protegerRuta, soloAdmin } = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.get("/", protegerRuta, listarProductos);
router.post("/", protegerRuta, soloAdmin, crearProducto);
router.put("/:id", protegerRuta, soloAdmin, actualizarProducto);
router.delete("/:id", protegerRuta, soloAdmin, eliminarProducto);

module.exports = router;
