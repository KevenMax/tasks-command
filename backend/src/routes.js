const express = require("express");
const TaskController = require("./controllers/TaskController");

const routes = express.Router();

routes.get("/tasks", TaskController.index);
routes.get("/tasks/:id", TaskController.show);
routes.post("/tasks", TaskController.store);
routes.put("/tasks/:id", TaskController.update);
routes.delete("/tasks/:id", TaskController.delete);

module.exports = routes;
