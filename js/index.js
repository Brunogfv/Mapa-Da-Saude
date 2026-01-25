function criarElemento(tag, className = null) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    return el;
}
const main = document.getElementById("main");
// Home
function criarHome() {
    const section = criarElemento("section", "home");
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const img = document.createElement("img");
    const p = document.createElement("p");

    h2.textContent = "Bem vindo ao";
    img.src = "./imgs/Mapa_da_saúde__1_-removebg-preview 1.png";
    img.alt = "";
    p.textContent =
        "Encontre médicos e especialidades em Garanhuns de forma rápida e organizada";

    div.append(h2, img, p);
    section.appendChild(div);
    return section;
}
// Guia
function criarGuia() {
    const section = criarElemento("section", "guia");
    const container = criarElemento("div", "guia-container");
    const texto = criarElemento("div", "guia-texto");
    const h3 = document.createElement("h3");
    h3.textContent = "Como usar o guia";
    const p = document.createElement("p");
    p.textContent =
        "Navegue pelas especialidades médicas ou busque por médicos específicos para acessar informações de contato e horários";

    texto.append(h3, p);
    const img = document.createElement("img");
    img.src = "./imgs/hospital.png";
    img.alt = "";
    container.append(texto, img);
    section.appendChild(container);
    return section;
}
// Estrutura dos cards (se quebrar, nao adiciona)
function criarCardsBase() {
    const section = criarElemento("section", "cards");
    const container = criarElemento("div", "cards-container");
    const h2 = document.createElement("h2");
    h2.textContent = "Destaques";
    const cardContainer = criarElemento("div", "card-container");
    container.append(h2, cardContainer);
    section.appendChild(container);
    return section;
}

main.append(criarHome(), criarGuia(), criarCardsBase());