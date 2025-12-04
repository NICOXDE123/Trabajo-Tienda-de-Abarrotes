// src/controllers/authController.js
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const generarToken = (usuario) => {
  const payload = {
    id: usuario._id,
    rol: usuario.rol,
  };

  return jwt.sign(payload, process.env.JWT_SECRET || "supersecreto_abarrotech", {
    expiresIn: process.env.JWT_EXPIRES || "1d",
  });
};

// POST /api/auth/login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("📥 BODY LOGIN:", req.body);

    if (!email || !password) {
      return res.status(400).json({ mensaje: "Email y password son obligatorios" });
    }

    const usuario = await User.findOne({ email });
    if (!usuario) {
      return res.status(400).json({ mensaje: "Credenciales inválidas" });
    }

    const esValido = await usuario.compararPassword(password);
    if (!esValido) {
      return res.status(400).json({ mensaje: "Credenciales inválidas" });
    }

    if (!usuario.activo) {
      return res.status(403).json({ mensaje: "Usuario inactivo" });
    }

    const token = generarToken(usuario);

    res.json({
      mensaje: "Login exitoso",
      token,
      usuario: {
        id: usuario._id,
        nombre: usuario.nombre,
        email: usuario.email,
        rol: usuario.rol,
      },
    });
  } catch (error) {
    console.error("❌ Error en login:", error.message);
    res.status(500).json({ mensaje: "Error interno en login" });
  }
};

// POST /api/auth/register (solo ADMIN luego de tener admin)
const registrarUsuario = async (req, res) => {
  try {
    const { nombre, email, password, rol } = req.body;

    if (!nombre || !email || !password) {
      return res.status(400).json({ mensaje: "Nombre, email y password son obligatorios" });
    }

    const existe = await User.findOne({ email });
    if (existe) {
      return res.status(400).json({ mensaje: "El email ya está registrado" });
    }

    const nuevo = await User.create({ nombre, email, password, rol });
    res.status(201).json({
      mensaje: "Usuario creado correctamente",
      usuario: {
        id: nuevo._id,
        nombre: nuevo.nombre,
        email: nuevo.email,
        rol: nuevo.rol,
      },
    });
  } catch (error) {
    console.error("❌ Error al registrar usuario:", error.message);
    res.status(500).json({ mensaje: "Error al registrar usuario" });
  }
};

module.exports = {
  login,
  registrarUsuario,
};
