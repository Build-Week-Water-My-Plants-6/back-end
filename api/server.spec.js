const request = require("supertest");

const server = require("./server.js");

const db = require("../database/dbConfig.js");

describe("the server", () => {
  // clear the test db before every test
  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("GET /", () => {
    it("should return status 200", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("should return the correct object", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.type).toEqual("text/html");
        });
    });
  });
});
