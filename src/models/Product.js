// src/models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    categoria: { type: String },
    precio: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    proveedor: { type: String },
    activo: { type: Boolean, default: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
