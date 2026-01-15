const express = require("express");
const router = express.Router();

const medicosController = require("../controllers/medicos.controller");

// rotas básicas
router.get("/", medicosController.listar);
router.get("/:id", medicosController.buscarPorId);
router.post("/", medicosController.criar);

module.exports = router;