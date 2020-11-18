const Users = require("./user-model.js");

const db = require("../database/dbConfig.js");

// setup suite
describe("The User Model", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("the add function", () => {
    it("should add a new user", async () => {
      // test setup
      const userData = {
        fullname: "John Smith",
        username: "test",
        password: "abc123",
        phonenumber: "12345678910"
      };
      await Users.add(userData);

      // assertion
      const users = await db("users");
      expect(users.length).toBe(1);
      expect(users[0].username).toBe("test");
    });

    it("should resolve to the newly created user", async () => {
      const userData = {
        fullname: "John Smith",
        username: "test",
        password: "abc123",
        phonenumber: "12345678910"
      };
      const plant = await Users.add(userData);

      expect(plant).toEqual({
        id: 1,
        fullname: "John Smith",
        username: "test",
        password: "abc123",
        phonenumber: "12345678910"
      });
    });
  });
});
