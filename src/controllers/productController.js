const Product = require("../models/Product.js");

const crearProducto = async (req, res) => {
  try {
    const producto = await Product.create(req.body);
    res.status(201).json(producto);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al crear producto" });
  }
};

const listarProductos = async (req, res) => {
  try {
    const productos = await Product.find({ activo: true }).sort({ createdAt: -1 });
    res.json(productos);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al listar productos" });
  }
};

const actualizarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Product.findByIdAndUpdate(id, req.body, { new: true });
    res.json(producto);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar producto" });
  }
};

const eliminarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndUpdate(id, { activo: false });
    res.json({ mensaje: "Producto eliminado (lógico)" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar producto" });
  }
};

module.exports = {
  crearProducto,
  listarProductos,
  actualizarProducto,
  eliminarProducto
};
