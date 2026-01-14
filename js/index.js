function criarElemento(tag, className = null) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    return el;
}

// Home
function criarHome() {
    const section = criarElemento("section", "home");
    const div = criarElemento("div");

    const h2 = document.createElement("h2");
    h2.textContent = "Bem vindo ao";

    const img = document.createElement("img");
    img.src = "./imgs/Mapa_da_saúde__1_-removebg-preview 1.png";
    img.alt = "";

    const p = document.createElement("p");
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

    const img = document.createElement("img");
    img.src = "./imgs/hospital.png";
    img.alt = "";

    texto.append(h3, p);
    container.append(texto, img);
    section.appendChild(container);

    return section;
}

// Criação dos cards
function criarCard(imgSrc, imgAlt, titulo, texto) {
    const card = criarElemento("div", "card");

    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = imgAlt;

    const textoDiv = criarElemento("div", "texto");

    const h3 = document.createElement("h3");
    h3.textContent = titulo;

    const p = document.createElement("p");
    p.textContent = texto;

    textoDiv.append(h3, p);
    card.append(img, textoDiv);

    return card;
}

// Conteúdo dos cards
function criarCards() {
    const section = criarElemento("section", "cards");
    const container = criarElemento("div", "cards-container");

    const h2 = document.createElement("h2");
    h2.textContent = "Destaques";

    const cardContainer = criarElemento("div", "card-container");

    cardContainer.append(
        criarCard(
            "./imgs/bebe001.jpeg",
            "Imagem de um Bebê",
            "Pediatria",
            "Cuidados médicos especializados para crianças e adolescentes"
        ),
        criarCard(
            "./imgs/cardio001.jpeg",
            "Imagem de uma mulher segurando um coração vermelho",
            "Cardiologia",
            "Diagnóstico e tratamento de doenças do coração"
        ),
        criarCard(
            "./imgs/clinicaGeral.png",
            "Imagem de um médico aferindo a pressão do paciente",
            "Clinica Geral",
            "Atendimento para consultas de rotina e prevenção de doenças"
        ),
        criarCard(
            "./imgs/odonto.png",
            "Imagem de um dentista fazendo tratamento em um paciente sentado em uma cadeira de dentista",
            "Odontologia",
            "Tratamentos dentários e cuidados com a saúde bucal"
        ),
        criarCard(
            "./imgs/ginecologista001.jpg",
            "Imagem de um dentista fazendo tratamento em um paciente sentado em uma cadeira de dentista",
            "Ginecologista",
            "Tratamentos dentários e cuidados com a saúde bucal"
        ),
        criarCard(
            "./imgs/reumatologista001.jpg",
            "Imagem de um dentista fazendo tratamento em um paciente sentado em uma cadeira de dentista",
            "Reumatologista",
            "Tratamentos dentários e cuidados com a saúde bucal"
        )
    );

    container.append(h2, cardContainer);
    section.appendChild(container);

    return section;
}

// INIT para melhor organização
function initPage() {
    const main = document.createElement("main");

    document.body.append(
        criarHeader(),
        main
    );

    main.append(
        criarHome(),
        criarGuia(),
        criarCards()
    );
}

document.addEventListener("DOMContentLoaded", initPage);