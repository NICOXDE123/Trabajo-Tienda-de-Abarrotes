// src/routes/productRoutes.js
const express = require("express");
const {
  listarProductos,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
  agregarStock,
} = require("../controllers/productController");
const { protegerRuta, soloAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();

// Ver productos (cualquier usuario autenticado)
router.get("/", protegerRuta, listarProductos);

// CRUD de productos (solo ADMIN)
router.post("/", protegerRuta, soloAdmin, crearProducto);
router.put("/:id", protegerRuta, soloAdmin, actualizarProducto);
router.delete("/:id", protegerRuta, soloAdmin, eliminarProducto);

// Agregar stock como lote (LIFO)
router.post("/:id/agregar-stock", protegerRuta, soloAdmin, agregarStock);

module.exports = router;
