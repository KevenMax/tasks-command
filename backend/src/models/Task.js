const { Schema, model } = require("mongoose");

const TaskSchema = new Schema(
  {
    name: String,
    description: String,
    date: Date,
    labels: [
      {
        type: String
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = model("Task", TaskSchema);
