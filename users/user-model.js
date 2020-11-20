const db = require("../database/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  add,
  update,
  remove
};

function find() {
  return db("users").select("id", "fullname", "username", "phonenumber");
}

function findBy(filter) {
  return db("users").where(filter);
}

async function add(user) {
  const [id] = await db("users").insert(user);

  return findById(id);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

// add new user
// function add(users) {
//   return db("users")
//     .insert(users)
//     .then(ids => {
//       return findById(ids[0]);
//     });
// }

// resolves to update user
function update(changes, id) {
  return db("users")
    .where({ id })
    .update(changes)
    .then(count => {
      return findById(id);
    });
}

// remove user
function remove(id) {
  return db("users")
    .where({ id })
    .del();
}
