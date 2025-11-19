const Sale = require("../models/Sale.js");
const Product = require("../models/Product.js");

const registrarVenta = async (req, res) => {
  try {
    const { items } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ mensaje: "La venta debe incluir productos" });
    }

    // Validar stock y calcular total
    let total = 0;

    for (const item of items) {
      const prod = await Product.findById(item.producto);

      if (!prod || !prod.activo) {
        return res.status(400).json({ mensaje: "Producto no válido" });
      }

      if (prod.stock < item.cantidad) {
        return res.status(400).json({ mensaje: `Stock insuficiente para ${prod.nombre}` });
      }

      total += prod.precio * item.cantidad;
    }

    // Registrar venta
    const venta = await Sale.create({
      vendedor: req.usuario._id,
      items,
      total
    });

    // Actualizar stock (comportamiento LIFO implícito)
    for (const item of items) {
      await Product.findByIdAndUpdate(item.producto, {
        $inc: { stock: -item.cantidad }
      });
    }

    res.status(201).json({
      mensaje: "Venta registrada con éxito",
      venta
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al registrar venta" });
  }
};

// LIFO: ventas más recientes primero
const obtenerVentasRecientes = async (req, res) => {
  try {
    const ventas = await Sale.find()
      .populate("vendedor", "nombre")
      .populate("items.producto", "nombre precio")
      .sort({ fecha: -1 }) // LIFO: más recientes primero
      .limit(20);

    res.json(ventas);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener las ventas" });
  }
};

module.exports = {
  registrarVenta,
  obtenerVentasRecientes
};
