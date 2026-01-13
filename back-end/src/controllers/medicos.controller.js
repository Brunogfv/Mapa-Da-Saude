const db = require("../database/db");

exports.listar = (req, res) => {
    const sql = "SELECT * FROM medicos";

    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        res.json(rows);
    });
};

exports.criar = (req, res) => {
    const { nome, especialidade_id, cidade } = req.body;

    const sql = `
        INSERT INTO medicos (nome, especialidade_id, cidade)
        VALUES (?, ?, ?)
    `;

    db.run(sql, [nome, especialidade_id, cidade], function (err) {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        req.status(201).json({ id: this.lastID });
    });
};