const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protegerRuta = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ mensaje: "Token no proporcionado" });
    }

    const token = authHeader.split(" ")[1];
    const decodificado = jwt.verify(token, process.env.JWT_SECRET);

    const usuario = await User.findById(decodificado.id).select("-password");
    if (!usuario) {
      return res.status(401).json({ mensaje: "Usuario no válido" });
    }

    req.usuario = usuario;
    next();
  } catch (error) {
    return res.status(401).json({ mensaje: "Token inválido" });
  }
};

const soloAdmin = (req, res, next) => {
  if (req.usuario.rol !== "ADMIN") {
    return res.status(403).json({ mensaje: "Requiere rol ADMIN" });
  }
  next();
};

module.exports = { protegerRuta, soloAdmin };
