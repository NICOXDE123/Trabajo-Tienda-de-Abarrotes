// src/config/redis.js
const { createClient } = require("redis");

const redisClient = createClient({
  url: process.env.REDIS_URL || "redis://localhost:6379",
});

redisClient.on("connect", () => {
  console.log("🔌 Conectado a Redis");
});

redisClient.on("error", (err) => {
  console.error("❌ Error en Redis:", err.message);
});

(async () => {
  try {
    await redisClient.connect();
  } catch (error) {
    console.error("❌ No se pudo conectar a Redis:", error.message);
  }
})();

module.exports = redisClient;
