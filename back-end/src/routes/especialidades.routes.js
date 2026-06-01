const express = require("express");
const router = express.Router();
const controller = require("../controllers/especialidades.controller");
const { verificarToken } = require("../middleware/auth");

router.get("/", controller.listar);
router.post("/", verificarToken, controller.criar);
router.put("/:id", verificarToken, controller.atualizar);
router.delete("/:id", verificarToken, controller.remover);

module.exports = router;