const request = require("supertest");
const app = require("../../server");
const mongoose = require("mongoose");

describe("Test mínimo - Auth", () => {

  test("Login inválido devuelve 400", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "fake@correo.com",
        password: "123456"
      });

    expect(res.statusCode).toBe(400);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

});
