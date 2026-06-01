const bcrypt = require("bcryptjs");
const db = require("../database/db");
const { gerarToken } = require("../middleware/auth");

exports.login = (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ erro: "Email e senha são obrigatórios" });
  }

  db.get("SELECT * FROM usuarios WHERE email = ?", [email], (err, row) => {
    if (err) return res.status(500).json({ erro: err.message });
    if (!row) return res.status(401).json({ erro: "Credenciais inválidas" });

    const senhaOk = bcrypt.compareSync(senha, row.senha);
    if (!senhaOk) return res.status(401).json({ erro: "Credenciais inválidas" });

    const token = gerarToken(row);
    res.json({ token, email: row.email });
  });
};

exports.verificar = (req, res) => {
  res.json({ valido: true, email: req.usuario.email });
};
