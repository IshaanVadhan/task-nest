require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("../config/db.config");
const taskRoutes = require("../routes/task.routes.js");
const userRoutes = require("../routes/user.routes.js");

const app = express();
connectDB();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

app.use("/api", taskRoutes);
app.use("/api", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
