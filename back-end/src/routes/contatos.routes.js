const express = require("express");
const router = express.Router();
const controller = require("../controllers/contatos.controller");
const { verificarToken } = require("../middleware/auth");

router.post("/", controller.criar);
router.get("/", verificarToken, controller.listar);

module.exports = router;
