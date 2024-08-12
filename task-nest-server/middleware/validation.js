const { body } = require("express-validator");

exports.validateUser = [
  body("email").isEmail().withMessage("Email must be valid"),
  body("password").notEmpty().withMessage("Password is required"),
];

exports.validateTask = [
  body("title").notEmpty().withMessage("Title is required"),
  body("dueDate").isISO8601().withMessage("Due Date must be a valid date"),
];
