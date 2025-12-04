// src/controllers/saleController.js
const Product = require("../models/Product");
const Sale = require("../models/Sale");
const { aplicarLIFO } = require("../services/lifoService");
const { validarStock } = require("../utils/validarStock");

const registrarVenta = async (req, res) => {
  try {
    const usuarioId = req.usuario.id;
    const { items } = req.body;

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ mensaje: "La venta debe tener al menos un item." });
    }

    let total = 0;
    const itemsProcesados = [];

    for (const item of items) {
      const { productoId, cantidad } = item;

      const producto = await Product.findById(productoId);
      if (!producto) {
        return res.status(404).json({ mensaje: `Producto no encontrado: ${productoId}` });
      }

      // Validar stock total (LIFO)
      const hayStock = validarStock(producto, cantidad);
      if (!hayStock) {
        return res.status(400).json({
          mensaje: `Stock insuficiente para el producto ${producto.nombre} (LIFO)`,
        });
      }

      // Aplicar LIFO (modifica lotes)
      await aplicarLIFO(producto, cantidad);
      await producto.save();

      const subtotal = producto.precio * cantidad;
      total += subtotal;

      itemsProcesados.push({
        producto: producto._id,
        cantidad,
        precioUnitario: producto.precio,
        subtotal,
      });
    }

    const venta = await Sale.create({
      usuario: usuarioId,
      items: itemsProcesados,
      total,
    });

    res.status(201).json({
      mensaje: "Venta registrada con LIFO",
      venta,
    });
  } catch (error) {
    console.error("❌ Error al registrar venta:", error.message);
    res.status(500).json({ mensaje: "Error al registrar venta" });
  }
};

const listarVentas = async (req, res) => {
  try {
    const ventas = await Sale.find()
      .populate("usuario", "nombre email")
      .populate("items.producto", "nombre precio");

    res.json({ ventas });
  } catch (error) {
    console.error("❌ Error al obtener ventas:", error.message);
    res.status(500).json({ mensaje: "Error al obtener ventas" });
  }
};

module.exports = {
  registrarVenta,
  listarVentas,
};
