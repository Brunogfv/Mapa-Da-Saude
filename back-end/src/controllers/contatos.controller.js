const db = require("../database/db");

exports.criar = (req, res) => {
  const { nome, email, mensagem } = req.body;

  if (!nome || !email || !mensagem) {
    return res.status(400).json({ erro: "Nome, email e mensagem são obrigatórios" });
  }

  const sql = "INSERT INTO contatos (nome, email, mensagem) VALUES (?, ?, ?)";
  db.run(sql, [nome, email, mensagem], function (err) {
    if (err) return res.status(500).json({ erro: err.message });
    res.status(201).json({ id: this.lastID, mensagem: "Mensagem enviada com sucesso" });
  });
};

exports.listar = (req, res) => {
  db.all("SELECT * FROM contatos ORDER BY criado_em DESC", [], (err, rows) => {
    if (err) return res.status(500).json({ erro: err.message });
    res.json(rows);
  });
};
