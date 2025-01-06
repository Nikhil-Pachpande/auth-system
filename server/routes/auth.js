const express = require("express");
const { signup, login } = require("../controllers/loginController");

const router = express.Router();

router.post("/v1/signup", signup);
router.post("/v1/login", login);

module.exports = router;
