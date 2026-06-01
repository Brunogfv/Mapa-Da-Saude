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
    const logoWrapper = document.createElement("div");
    logoWrapper.className = "home-logo";
    logoWrapper.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0891B2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" /></svg> <span>Mapa da Saúde</span>`;
    const p = document.createElement("p");

    h2.textContent = "Bem vindo ao";
    p.textContent =
        "Encontre médicos e especialidades em Garanhuns de forma rápida e organizada";

    div.append(h2, logoWrapper, p);
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
    const icone = document.createElement("div");
    icone.className = "icone-svg icone-hospital";
    icone.setAttribute("aria-hidden", "true");
    icone.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0891B2"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>`;
    container.append(texto, icone);
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