const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./routers/auth-router.js');
const usersRouter = require('./routers/users-router.js');

const server = express();
require('dotenv').config();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.send("Here we go!");
});

module.exports = server;
