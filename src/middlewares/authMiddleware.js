// src/middlewares/authMiddleware.js
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protegerRuta = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ mensaje: "Token no proporcionado" });
    }

    const token = authHeader.split(" ")[1];

    const payload = jwt.verify(token, process.env.JWT_SECRET || "supersecreto_abarrotech");

    const usuario = await User.findById(payload.id);
    if (!usuario || !usuario.activo) {
      return res.status(401).json({ mensaje: "Usuario no válido o inactivo" });
    }

    req.usuario = {
      id: usuario._id,
      nombre: usuario.nombre,
      rol: usuario.rol,
    };

    next();
  } catch (error) {
    return res.status(401).json({ mensaje: "Token inválido o expirado" });
  }
};

const soloAdmin = (req, res, next) => {
  if (req.usuario?.rol !== "ADMIN") {
    return res.status(403).json({ mensaje: "Solo ADMIN puede realizar esta acción" });
  }
  next();
};

module.exports = {
  protegerRuta,
  soloAdmin,
};
