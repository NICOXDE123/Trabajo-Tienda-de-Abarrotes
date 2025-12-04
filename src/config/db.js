// src/config/db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI || "mongodb://localhost:27017/abarrotech_db";

    await mongoose.connect(uri, {
      dbName: "abarrotech_db",
    });

    console.log("✅ MongoDB conectado:", uri);
  } catch (error) {
    console.error("❌ Error al conectar MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
