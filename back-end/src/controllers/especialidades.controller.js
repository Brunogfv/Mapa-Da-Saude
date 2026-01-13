const db = require("../database/db");

exports.listar = (req, res) => {
    db.all("SELECT * FROM especialidades", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        res.json(rows);
    });
};