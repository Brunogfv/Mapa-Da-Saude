const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.resolve(__dirname, "../../database.sqlite");

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Erro ao conectar ao banco", err);
    }else{
        console.log("SQLite conectado com sucesso");
    }
});

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

module.exports = db;