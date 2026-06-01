const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "mapa-saude-secret-dev";

function gerarToken(usuario) {
  return jwt.sign({ id: usuario.id, email: usuario.email }, JWT_SECRET, {
    expiresIn: "7d",
  });
}

function verificarToken(req, res, next) {
  const header = req.headers.authorization;
  if (!header) {
    return res.status(401).json({ erro: "Token não fornecido" });
  }

  const token = header.startsWith("Bearer ") ? header.slice(7) : header;
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.usuario = decoded;
    next();
  } catch {
    return res.status(401).json({ erro: "Token inválido ou expirado" });
  }
}

module.exports = { gerarToken, verificarToken };
