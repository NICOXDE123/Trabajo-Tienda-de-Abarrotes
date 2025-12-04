// src/controllers/productController.js
const Product = require("../models/Product.js");
const redisClient = require("../config/redis.js");

const CACHE_KEY_LISTA_PRODUCTOS = "productos:lista";

const listarProductos = async (req, res) => {
  try {
    const cache = await redisClient.get(CACHE_KEY_LISTA_PRODUCTOS);
    if (cache) {
      return res.json({ fuente: "cache", productos: JSON.parse(cache) });
    }

    const productos = await Product.find().sort({ nombre: 1 });

    await redisClient.setEx(CACHE_KEY_LISTA_PRODUCTOS, 60, JSON.stringify(productos));

    res.json({ fuente: "db", productos });
  } catch (error) {
    console.error("❌ Error al listar productos:", error.message);
    res.status(500).json({ mensaje: "Error al obtener productos" });
  }
};

const crearProducto = async (req, res) => {
  try {
    const { nombre, precio, categoria, descripcion } = req.body;

    if (!nombre || precio == null) {
      return res.status(400).json({ mensaje: "Nombre y precio son obligatorios" });
    }

    const producto = await Product.create({
      nombre,
      precio,
      categoria,
      descripcion,
      lotes: [], // se agregan luego con /agregar-stock
    });

    await redisClient.del(CACHE_KEY_LISTA_PRODUCTOS);

    res.status(201).json({ mensaje: "Producto creado", producto });
  } catch (error) {
    console.error("❌ Error al crear producto:", error.message);
    res.status(500).json({ mensaje: "Error al crear producto" });
  }
};

const actualizarProducto = async (req, res) => {
  try {
    const { id } = req.params;

    const producto = await Product.findByIdAndUpdate(
      id,
      {
        nombre: req.body.nombre,
        precio: req.body.precio,
        categoria: req.body.categoria,
        descripcion: req.body.descripcion,
      },
      { new: true }
    );

    if (!producto) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }

    await redisClient.del(CACHE_KEY_LISTA_PRODUCTOS);

    res.json({ mensaje: "Producto actualizado", producto });
  } catch (error) {
    console.error("❌ Error al actualizar producto:", error.message);
    res.status(500).json({ mensaje: "Error al actualizar producto" });
  }
};

const eliminarProducto = async (req, res) => {
  try {
    const { id } = req.params;

    const producto = await Product.findByIdAndDelete(id);

    if (!producto) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }

    await redisClient.del(CACHE_KEY_LISTA_PRODUCTOS);

    res.json({ mensaje: "Producto eliminado" });
  } catch (error) {
    console.error("❌ Error al eliminar producto:", error.message);
    res.status(500).json({ mensaje: "Error al eliminar producto" });
  }
};

// Añadir stock como lote (LIFO)
const agregarStock = async (req, res) => {
  try {
    const { id } = req.params;
    const { cantidad } = req.body;

    if (!cantidad || cantidad <= 0) {
      return res.status(400).json({ mensaje: "La cantidad debe ser mayor que 0." });
    }

    const producto = await Product.findById(id);
    if (!producto) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }

    producto.lotes.push({
      cantidad,
      fechaIngreso: new Date(),
    });

    await producto.save();
    await redisClient.del(CACHE_KEY_LISTA_PRODUCTOS);

    res.json({ mensaje: "Stock añadido como lote (LIFO)", producto });
  } catch (error) {
    console.error("❌ Error al agregar stock:", error.message);
    res.status(500).json({ mensaje: "Error al agregar stock" });
  }
};

module.exports = {
  listarProductos,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
  agregarStock,
};
