const mongoose = require("mongoose");

const loteSchema = new mongoose.Schema({
  cantidad: { type: Number, required: true },
  fechaIngreso: { type: Date, default: Date.now }
});

// 📌 PRODUCTO SCHEMA
const productSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  categoria: { type: String, required: true },
  descripcion: { type: String },

  // 🔥 FIX: asegurar que siempre sea un array
  lotes: {
    type: [loteSchema],
    default: function () {
      return [];
    }
  },

}, { timestamps: true });

// 🔥 FIX: evitar error del reduce cuando lotes = undefined
productSchema.virtual("stockTotal").get(function () {
  const lotes = this.lotes || [];
  return lotes.reduce((acc, lote) => acc + lote.cantidad, 0);
});

module.exports = mongoose.model("Product", productSchema);
