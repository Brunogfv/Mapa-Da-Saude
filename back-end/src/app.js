const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Rotas
const especialidadesRoutes = require("./routes/especialidades.routes");
const medicosRoutes = require("./routes/medicos.routes");

app.use("/especialidades", especialidadesRoutes);
app.use("/medicos", medicosRoutes);

module.exports = app;