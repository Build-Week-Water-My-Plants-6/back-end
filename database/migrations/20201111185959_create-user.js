exports.up = function(knex) {
    return (
      knex.schema
        .createTable("users", tbl => {
          tbl.increments();
          tbl.string("fullname", 128).notNullable();
          tbl
            .string("username", 128)
            .notNullable()
            .unique();
          tbl.string("password", 128).notNullable();
          tbl.string("phonenumber", 11);
        })
        .createTable("plants", tbl => {
          tbl.increments();
          tbl.string("plant_name", 256).notNullable();
          tbl.string("plant_species", 256).notNullable();
          tbl.string("water_schedule", 512).notNullable();
        })
    );
  };
  
  exports.down = function(knex) {
    // reverse order of creation
    return knex.schema.dropTableIfExists("plants").dropTableIfExists("users");
  };
  