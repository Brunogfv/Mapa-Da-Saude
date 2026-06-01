const express = require("express");
const router = express.Router();
const controller = require("../controllers/auth.controller");
const { verificarToken } = require("../middleware/auth");

router.post("/login", controller.login);
router.get("/verificar", verificarToken, controller.verificar);

module.exports = router;
