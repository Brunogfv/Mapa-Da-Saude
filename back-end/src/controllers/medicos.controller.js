// Importar o objeto de conexão
const db = require("../database/db");

// Função listar (com paginação)
exports.listar = (req, res) => {
    const { especialidade, busca, pagina = 1, limite = 12 } = req.query;
    const offset = (Math.max(1, Number(pagina)) - 1) * Number(limite);

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

    let countSql = `
        SELECT COUNT(*) AS total
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
    }

    if (conditions.length > 0) {
        const where = " WHERE " + conditions.join(" AND ");
        sql += where;
        countSql += where;
    }

    sql += " ORDER BY m.nome LIMIT ? OFFSET ?";
    const countParams = [...params];

    db.get(countSql, countParams, (err, countRow) => {
        if (err) return res.status(500).json({ erro: err.message });

        const total = countRow ? countRow.total : 0;
        params.push(Number(limite), offset);

        db.all(sql, params, (err, rows) => {
            if (err) return res.status(500).json({ erro: err.message });
            res.json({
                dados: rows,
                total,
                pagina: Number(pagina),
                totalPaginas: Math.ceil(total / Number(limite)),
            });
        });
    });
};


// Função buscar por ID
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

// Criar médico
exports.criar = (req, res) => {
    const { nome, especialidade_id, descricao } = req.body;
    const foto = req.file ? req.file.filename : null;

    const sql = `
        INSERT INTO medicos (nome, especialidade_id, foto, descricao)
        VALUES (?, ?, ?, ?)
    `;

    db.run(sql, [nome, especialidade_id, foto, descricao], function (err) {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        res.status(201).json({ id: this.lastID, foto });
    });
};

// Exemplo
// {
//   "nome": "Dr. João Teste",
//   "especialidade_id": 2,
//   "foto": "joaoTeste.png",
//   "descricao": "Especialista em cardiologia clínica"
// }

// Atualizar médico
exports.atualizar = (req, res) => {
    const { id } = req.params;
    const { nome, especialidade_id, descricao } = req.body;
    const foto = req.file ? req.file.filename : undefined;

    const campos = [];
    const params = [];

    if (nome !== undefined) { campos.push("nome = ?"); params.push(nome); }
    if (especialidade_id !== undefined) { campos.push("especialidade_id = ?"); params.push(especialidade_id); }
    if (descricao !== undefined) { campos.push("descricao = ?"); params.push(descricao); }
    if (foto !== undefined) { campos.push("foto = ?"); params.push(foto); }

    if (campos.length === 0) {
        return res.status(400).json({ erro: "Nenhum campo para atualizar" });
    }

    params.push(id);
    const sql = `UPDATE medicos SET ${campos.join(", ")} WHERE id = ?`;

    db.run(sql, params, function (err) {
        if (err) return res.status(500).json({ erro: err.message });
        if (this.changes === 0) return res.status(404).json({ mensagem: "Médico não encontrado" });
        res.json({ mensagem: "Médico atualizado com sucesso" });
    });
};

// Exemplo
// {
//   "nome": "Dr. João Teste2",
//   "especialidade_id": 2,
//   "foto": "joaoTeste.png",
//   "descricao": "Especialista em cardiologia clínica"
// }

//Remover médico
exports.remover = (req, res) => {
    const { id } = req.params;

    const sql = `DELETE FROM medicos WHERE id = ?`;

    db.run(sql, [id], function (err) {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ mensagem: "Médico não encontrado." });
        }

        res.json({ mensagem: "Médico removido com sucesso" });
    });
};