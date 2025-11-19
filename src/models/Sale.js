// src/models/Sale.js
const mongoose = require("mongoose");

const saleItemSchema = new mongoose.Schema(
  {
    producto: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true
    },
    cantidad: { type: Number, required: true },
    precioUnitario: { type: Number, required: true }
  },
  { _id: false }
);

const saleSchema = new mongoose.Schema(
  {
    vendedor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    items: [saleItemSchema],
    total: { type: Number, required: true },
    fecha: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sale", saleSchema);
