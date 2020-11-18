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

describe("POST /api/plants", () => {
  it("should return JSON", () => {
    return request(server)
      .post("/api/plants")
      .send({
        plant_name: "test5",
        plant_species: "test5",
        water_schedule: "test5"
      })
      .then(res => {
        expect(res.type).toMatch(/json/);
      });
  });
});

describe("GET /api/plants", () => {
  it("should return list of plants", () => {
    return request(server)
      .get("/")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});
