const Sale = require("../models/Sale.js");

const reporteVentasPorRango = async (req, res) => {
  try {
    const { desde, hasta } = req.query;

    const filtro = {};

    if (desde || hasta) {
      filtro.fecha = {};
      if (desde) filtro.fecha.$gte = new Date(desde);
      if (hasta) filtro.fecha.$lte = new Date(hasta);
    }

    const ventas = await Sale.find(filtro).populate("vendedor", "nombre");

    const totalVentas = ventas.reduce((acc, venta) => acc + venta.total, 0);

    res.json({
      totalRegistros: ventas.length,
      totalVentas,
      ventas
    });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al generar reporte" });
  }
};

module.exports = {
  reporteVentasPorRango
};
