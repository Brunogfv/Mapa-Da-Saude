// Importar o SQLite
const sqlite3 = require("sqlite3").verbose();

// Importar o módulo
const path = require("path");

// Definindo o caminho do banco de dados
const dbPath = path.resolve(__dirname, "../../database.sqlite");

// Criando a conexão com o banco de dados
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Erro ao conectar ao banco", err);
    }else{
        console.log("SQLite conectado com sucesso");
    }
});

// Criação de tabelas
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS especialidades (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            descricao TEXT,
            slug TEXT UNIQUE
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS medicos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            especialidade_id INTEGER,
            foto TEXT,
            FOREIGN KEY (especialidade_id) REFERENCES especialidades(id)
        )
    `);
});

// Exporta o banco de dados
module.exports = db;