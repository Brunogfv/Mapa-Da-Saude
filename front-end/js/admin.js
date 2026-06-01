const API = "https://mapa-da-saude.onrender.com";

function getToken() {
  return localStorage.getItem("admin_token");
}

function isAutenticado() {
  return !!getToken();
}

function logout() {
  localStorage.removeItem("admin_token");
  localStorage.removeItem("admin_email");
  window.location.href = "login.html";
}

async function apiFetch(path, options = {}) {
  const token = getToken();
  const headers = { ...options.headers };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  if (!(options.body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }

  const res = await fetch(`${API}${path}`, { ...options, headers });

  if (res.status === 401 && path !== "/auth/login") {
    logout();
    return null;
  }

  return res;
}

function exibirErro(msg) {
  const el = document.getElementById("erro");
  if (el) {
    el.textContent = msg;
    el.classList.add("visible");
  }
}

function exibirSucesso(msg) {
  const el = document.getElementById("sucesso");
  if (el) {
    el.textContent = msg;
    el.classList.add("visible");
  }
}

function limparMensagens() {
  document.querySelectorAll(".erro, .sucesso").forEach((el) => {
    el.classList.remove("visible");
  });
}

function fecharModal() {
  document.getElementById("modal").classList.remove("visible");
  document.getElementById("formModal").reset();
  delete document.getElementById("formModal").dataset.id;
}

function abrirModal(titulo) {
  limparMensagens();
  document.getElementById("modalTitulo").textContent = titulo;
  document.getElementById("modal").classList.add("visible");
}
