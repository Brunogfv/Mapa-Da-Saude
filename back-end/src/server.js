// Importar o arquivo do servidor
const app = require("./app");

// Porta escolhida (Railway usa process.env.PORT)
const PORT = process.env.PORT || 3000;

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});