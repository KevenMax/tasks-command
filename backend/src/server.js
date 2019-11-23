const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");

const server = express();

mongoose.connect(
  "mongodb+srv://taskcommand:taskcommand@cluster0-fh9qj.mongodb.net/taskcommand?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

server.use(express.json());
server.use(routes);

server.listen(3000);
