const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir uploads estaticamente
app.use("/uploads", express.static(path.resolve(__dirname, "../uploads")));

// Rotas
const authRoutes = require("./routes/auth.routes");
const especialidadesRoutes = require("./routes/especialidades.routes");
const medicosRoutes = require("./routes/medicos.routes");
const contatosRoutes = require("./routes/contatos.routes");

app.use("/auth", authRoutes);
app.use("/especialidades", especialidadesRoutes);
app.use("/medicos", medicosRoutes);
app.use("/contatos", contatosRoutes);

module.exports = app;