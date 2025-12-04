// server.js
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const connectDB = require("./src/config/db");
const redisClient = require("./src/config/redis");

const authRoutes = require("./src/routes/authRoutes");
const productRoutes = require("./src/routes/productRoutes");
const saleRoutes = require("./src/routes/saleRoutes");
const reportRoutes = require("./src/routes/reportRoutes");

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Conexión a MongoDB
connectDB();

// Redis ya se conecta en config/redis, acá solo escuchamos eventos opcionales
redisClient.on("ready", () => {
  console.log("✅ Redis listo para usar");
});

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/productos", productRoutes);
app.use("/api/ventas", saleRoutes);
app.use("/api/reportes", reportRoutes);

// Arrancar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 API ABARROTECH corriendo en http://localhost:${PORT}`);
});
