// Importar o objeto de conexão
const db = require("../database/db");

// Função listar
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
    const { nome, especialidade_id, foto, descricao } = req.body;

    const sql = `
        UPDATE medicos
        SET nome = ?, especialidade_id = ?, foto = ?, descricao = ?
        WHERE id = ?
    `;

    db.run(
        sql,
        [nome, especialidade_id, foto, descricao, id],
        function (err) {
            if (err) {
                return res.status(500).json({ erro: err.message });
            }

            if (this.changes === 0) {
                return res.status(404).json({ mensagem: "Médico não encontrado" });
            }

            res.json({ mensagem: "Médico atualizado com sucesso" });
        }
    );
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