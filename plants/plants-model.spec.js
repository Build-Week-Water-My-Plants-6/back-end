const Plants = require("../plants/plants-model.js");

const db = require("../database/dbConfig.js");

// setup suite
describe("The Plant Model", () => {
  beforeEach(async () => {
    await db("plants").truncate();
  });

  describe("the add function", () => {
    it("should add a new plant", async () => {
      // test setup
      const plantData = {
        plant_name: "test",
        plant_species: "test",
        water_schedule: "test"
      };
      await Plants.add(plantData);

      // assertion
      const plants = await db("plants");
      expect(plants.length).toBe(1);
      expect(plants[0].plant_name).toBe("test");
    });

    it("should resolve to the newly created plant", async () => {
      const plantData = {
        plant_name: "test",
        plant_species: "test",
        water_schedule: "test"
      };
      const plant = await Plants.add(plantData);

      expect(plant).toEqual({
        id: 1,
        plant_name: "test",
        plant_species: "test",
        water_schedule: "test"
      });
    });
  });
});
