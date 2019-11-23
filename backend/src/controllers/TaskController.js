const Task = require("../models/Task");

module.exports = {
  async index(req, res) {
    try {
      const tasks = await Task.find();
      return res.json(tasks);
    } catch (error) {
      return res.json(error);
    }
  },

  async show(req, res) {
    const { id } = req.params;
    try {
      const task = await Task.findById(id);
      if (task) {
        return res.json(task);
      } else {
        return res.status(400).json({ error: "Task not found" });
      }
    } catch (error) {
      return res.json(error);
    }
  },

  async store(req, res) {
    const { name, description, date, labels } = req.body;

    try {
      const task = await Task.create({
        name,
        description,
        date,
        labels
      });

      return res.json(task);
    } catch (error) {
      return res.json(error);
    }
  },

  async update(req, res) {
    const { id } = req.params;
    try {
      let task = await Task.findById(id);
      if (task) {
        await Task.updateOne({ _id: id }, req.body);
        task = await Task.findById(id);
        return res.json(task);
      } else {
        return res.status(400).json();
      }
    } catch (error) {
      return res.json(error);
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const task = await Task.findById(id);
      if (task) {
        await Task.deleteOne({ _id: id });
        return res.status(204).json();
      } else {
        return res.status(400).json({ error: "Task not found" });
      }
    } catch (error) {
      return res.status(400).json(error);
    }
  }
};
