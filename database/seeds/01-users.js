exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          fullname: "Dave Chappelle",
          username: "DChapp",
          password: "ImRickJames!",
          phonenumber: "4326963823"
        },
        {
          fullname: "Morty Smith",
          username: "RegularMorty",
          password: "IwantJessica93",
          phonenumber: "1234567890"
        }
      ]);
    });
};

