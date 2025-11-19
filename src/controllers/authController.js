const jwt = require("jsonwebtoken");
const User = require("../models/User.js");

const generarToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES || "1d"
  });
};

const registrarUsuario = async (req, res) => {
  try {
    const { nombre, email, password, rol } = req.body;

    const existe = await User.findOne({ email });
    if (existe) {
      return res.status(400).json({ mensaje: "El email ya está registrado" });
    }

    const nuevo = await User.create({ nombre, email, password, rol });
    res.status(201).json({
      mensaje: "Usuario creado correctamente",
      usuario: { id: nuevo._id, nombre: nuevo.nombre, email: nuevo.email, rol: nuevo.rol }
    });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al registrar usuario" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const usuario = await User.findOne({ email });

    if (!usuario) {
      return res.status(400).json({ mensaje: "Credenciales inválidas" });
    }

    const ok = await usuario.compararPassword(password);
    if (!ok) {
      return res.status(400).json({ mensaje: "Credenciales inválidas" });
    }

    const token = generarToken(usuario._id);
    res.json({
      mensaje: "Login exitoso",
      token,
      usuario: { id: usuario._id, nombre: usuario.nombre, rol: usuario.rol }
    });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al iniciar sesión" });
  }
};

module.exports = { registrarUsuario, login };
