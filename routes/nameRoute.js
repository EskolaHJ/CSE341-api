// routes/nameRoute.js
const express = require("express");
const { getName } = require("../controllers/nameController");
const router = express.Router();

router.get("/", getName);

module.exports = router;
