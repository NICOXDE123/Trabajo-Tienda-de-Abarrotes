// server.js
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const authRoutes = require("./src/routes/authRoutes");
const productRoutes = require("./src/routes/productRoutes");
const saleRoutes = require("./src/routes/saleRoutes");
const reportRoutes = require("./src/routes/reportRoutes");

const app = express();

// Middlewares globales
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "abarrotech_db"
  })
  .then(() => console.log("✅ Conexión a MongoDB exitosa"))
  .catch((err) => console.error("❌ Error al conectar MongoDB:", err));

// Rutas principales
app.use("/api/auth", authRoutes);
app.use("/api/productos", productRoutes);
app.use("/api/ventas", saleRoutes);
app.use("/api/reportes", reportRoutes);

// Puerto del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor ABARROTECH funcionando en http://localhost:${PORT}`);
});
