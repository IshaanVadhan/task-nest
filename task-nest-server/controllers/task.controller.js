const Task = require("../models/task.model.js");
const { validationResult } = require("express-validator");

exports.createTask = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const task = new Task({
      ...req.body,
      user: req.user._id,
    });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user._id });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getTaskById = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findOne({ _id: id, user: req.user._id });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findOneAndUpdate(
      { _id: id, user: req.user._id },
      req.body,
      { new: true }
    );
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findOneAndDelete({ _id: id, user: req.user._id });
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.toggleTaskCompleted = async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  try {
    if (typeof completed !== "boolean") {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const task = await Task.findOneAndUpdate(
      { _id: id, user: req.user._id },
      { completed },
      { new: true }
    );

    if (!task)
      return res
        .status(404)
        .json({ message: "Task not found or not authorized" });

    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
