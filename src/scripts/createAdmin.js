// src/scripts/createAdmin.js
const mongoose = require("mongoose");
const User = require("../models/User");
require("dotenv").config();

(async () => {
  try {
    const uri = process.env.MONGO_URI || "mongodb://localhost:27017/abarrotech_db";

    await mongoose.connect(uri, { dbName: "abarrotech_db" });
    console.log("🔌 Conectado a MongoDB en:", uri);

    await User.deleteMany({ email: "admin@abarrotech.com" });

    const admin = new User({
      nombre: "Administrador",
      email: "admin@abarrotech.com",
      password: "admin123",
      rol: "ADMIN",
      activo: true,
    });

    await admin.save();

    console.log("✅ Admin creado correctamente");
    console.log("   Email: admin@abarrotech.com");
    console.log("   Password: admin123");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error al crear admin:", error.message);
    process.exit(1);
  }
})();