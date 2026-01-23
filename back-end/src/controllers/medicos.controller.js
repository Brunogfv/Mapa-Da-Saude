const db = require("../database/db");

exports.listar = (req, res) => {
    const { especialidade, busca } = req.query;

    let sql = `
        SELECT
            m.id,
            m.nome,
            m.foto,
            m.descricao,
            e.nome AS especialidade,
            e.slug
        FROM medicos m
        JOIN especialidades e ON e.id = m.especialidade_id
    `;

    const params = [];
    const conditions = [];

    if (especialidade) {
        conditions.push("e.slug = ?")
        params.push(especialidade);
    }

    if (busca) {
        conditions.push(`
            (
                LOWER(m.nome) LIKE ?
                OR LOWER(e.nome) LIKE ?
                OR LOWER(e.slug) LIKE ?
            )
        `);
        const termo = `%${busca.toLowerCase()}%`;
        params.push(termo, termo, termo);
        // conditions.push("LOWER(m.nome) LIKE ?");
        // params.push(`%${nome.toLowerCase()}%`);
    }

    if (conditions.length > 0) {
        sql += " WHERE " + conditions.join(" AND ");
    }

    db.all(sql, params, (err, rows) => {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        res.json(rows);
    });
};

exports.criar = (req, res) => {
    const { nome, especialidade_id, foto, descricao } = req.body;

    const sql = `
        INSERT INTO medicos (nome, especialidade_id, foto, descricao)
        VALUES (?, ?, ?, ?)
    `;

    db.run(sql, [nome, especialidade_id, foto, descricao], function (err) {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        res.status(201).json({ id: this.lastID });
    });
};

exports.buscarPorId = (req, res) => {
    const { id } = req.params;

    const sql = `
        SELECT
            m.id,
            m.nome,
            m.foto,
            m.descricao,
            e.nome AS especialidade
        FROM medicos m
        JOIN especialidades e ON e.id = m.especialidade_id
        WHERE m.id = ?
    `;

    db.get(sql, [id], (err, row) => {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        res.json(row);
    });
};