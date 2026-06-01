const db = require("../database/db");

exports.listar = (req, res) => {
  db.all("SELECT * FROM especialidades ORDER BY nome", [], (err, rows) => {
    if (err) return res.status(500).json({ erro: err.message });
    res.json(rows);
  });
};

exports.criar = (req, res) => {
  const { nome, descricao, slug } = req.body;
  if (!nome) return res.status(400).json({ erro: "Nome é obrigatório" });

  const s = slug || nome.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  const sql = "INSERT INTO especialidades (nome, descricao, slug) VALUES (?, ?, ?)";
  db.run(sql, [nome, descricao || null, s], function (err) {
    if (err) return res.status(500).json({ erro: err.message });
    res.status(201).json({ id: this.lastID, slug: s });
  });
};

exports.atualizar = (req, res) => {
  const { id } = req.params;
  const { nome, descricao, slug } = req.body;

  const sql = "UPDATE especialidades SET nome = COALESCE(?, nome), descricao = COALESCE(?, descricao), slug = COALESCE(?, slug) WHERE id = ?";
  db.run(sql, [nome || null, descricao ?? null, slug || null, id], function (err) {
    if (err) return res.status(500).json({ erro: err.message });
    if (this.changes === 0) return res.status(404).json({ erro: "Especialidade não encontrada" });
    res.json({ mensagem: "Especialidade atualizada com sucesso" });
  });
};

exports.remover = (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM especialidades WHERE id = ?", [id], function (err) {
    if (err) return res.status(500).json({ erro: err.message });
    if (this.changes === 0) return res.status(404).json({ erro: "Especialidade não encontrada" });
    res.json({ mensagem: "Especialidade removida com sucesso" });
  });
};
