// Importando as bibliotecas
const express = require("express");
const cors = require("cors");

// Criação da aplicação
const app = express();

// Uso das bibliotecas
app.use(cors());
app.use(express.json());

// Rotas
const especialidadesRoutes = require("./routes/especialidades.routes");
const medicosRoutes = require("./routes/medicos.routes");

// Uso das rotas
app.use("/especialidades", especialidadesRoutes);
app.use("/medicos", medicosRoutes);

// Exportação do app
module.exports = app;