// src/controllers/reportController.js
const Sale = require("../models/Sale");
const redisClient = require("../config/redis");

// Reporte: total de ventas por día (últimos 7 días)
const ventasPorDia = async (req, res) => {
  try {
    const cacheKey = "reportes:ventas_por_dia";

    const cache = await redisClient.get(cacheKey);
    if (cache) {
      return res.json({ fuente: "cache", datos: JSON.parse(cache) });
    }

    const hoy = new Date();
    const hace7Dias = new Date();
    hace7Dias.setDate(hoy.getDate() - 7);

    const datos = await Sale.aggregate([
      {
        $match: {
          fecha: { $gte: hace7Dias, $lte: hoy },
        },
      },
      {
        $group: {
          _id: {
            $dateToString: { format: "%Y-%m-%d", date: "$fecha" },
          },
          totalVentas: { $sum: "$total" },
          cantidadVentas: { $sum: 1 },
        },
      },
      {
        $sort: { _id: 1 },
      },
    ]);

    await redisClient.setEx(cacheKey, 60, JSON.stringify(datos));

    res.json({ fuente: "db", datos });
  } catch (error) {
    console.error("❌ Error en reporte ventasPorDia:", error.message);
    res.status(500).json({ mensaje: "Error al generar reporte" });
  }
};

module.exports = {
  ventasPorDia,
};
