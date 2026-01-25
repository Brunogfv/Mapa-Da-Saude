// Importando a biblioteca
const express = require("express");

// Criando o Router
const router = express.Router();

// Importando o controller
const medicosController = require("../controllers/medicos.controller");

// Rotas básicas
router.get("/", medicosController.listar);
router.get("/:id", medicosController.buscarPorId);
router.post("/", medicosController.criar);
router.put("/:id", medicosController.atualizar);
router.delete("/:id", medicosController.remover);

// Exporta o router
module.exports = router;