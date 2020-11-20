const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();
const db = require("../database/dbConfig.js");

const server = express();

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/user-router.js");
const plantsRouter = require("../plants/plants-router.js");

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/user", usersRouter);
server.use("/api/plants", plantsRouter);


server.get("/", (req, res) => {
  res.send("Water My Plant");
});

module.exports = server;