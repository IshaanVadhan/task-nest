const express = require("express");
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
  toggleTaskCompleted,
} = require("../controllers/task.controller.js");
const { validateTask } = require("../middleware/validation");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.post("/tasks", authMiddleware, validateTask, createTask);
router.get("/tasks", authMiddleware, getTasks);
router.get("/tasks/:id", authMiddleware, getTaskById);
router.put("/tasks/:id", authMiddleware, validateTask, updateTask);
router.delete("/tasks/:id", authMiddleware, deleteTask);
router.put("/tasks/:id/status", authMiddleware, toggleTaskCompleted);

module.exports = router;
