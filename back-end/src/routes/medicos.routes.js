const express = require("express");
const router = express.Router();
const medicosController = require("../controllers/medicos.controller");
const { verificarToken } = require("../middleware/auth");
const upload = require("../middleware/upload");

router.get("/", medicosController.listar);
router.get("/:id", medicosController.buscarPorId);
router.post("/", verificarToken, upload.single("foto"), medicosController.criar);
router.put("/:id", verificarToken, upload.single("foto"), medicosController.atualizar);
router.delete("/:id", verificarToken, medicosController.remover);

module.exports = router;