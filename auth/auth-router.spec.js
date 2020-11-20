const server = require("../api/server.js");
const request = require("supertest");
const db = require("../database/dbConfig.js");

describe("GET /", () => {
  it("should return status 200", () => {
    return request(server)
      .get("/")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});

describe("POST /register", () => {
  it("should return JSON", () => {
    return request(server)
      .post("/api/auth/register")
      .send({
        fullname: "testroute",
        username: "testroute11",
        password: "abc123",
        phonenumber: "12125555559"
      })
      .then(res => {
        expect(res.type).toMatch(/json/);
      });
  });

  it("should return 200", () => {
    return request(server)
      .post("/api/auth/login")
      .send({
        username: "testroute11",
        password: "abc123"
      })
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});

describe("GET /api/users", () => {
  it("should return list of users", () => {
    return request(server)
      .get("/")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});
