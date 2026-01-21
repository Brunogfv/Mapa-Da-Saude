function criarElemento(tag, className = null) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    return el;
}
// Título
function criarTitulo() {
    const section = criarElemento("section", "titulo");
    const h2 = document.createElement("h2");
    h2.textContent = "Sobre o Mapa da Saúde";
    const p = document.createElement("p");
    p.textContent =
        "O mapa da saúde é uma plataforma criada para ajudar os moradores de Garanhuns e região a encontrar com facilidade profissionais da área médica.";
    section.append(h2, p);
    return section;
}
// Conteúdo do Box
function criarConteudoBox(imgSrc, titulo, texto) {
    const box = criarElemento("div", "conteudo-box");
    const boxTexto = criarElemento("div", "conteudo-box-texto");
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = "";
    const h3 = document.createElement("h3");
    h3.textContent = titulo;
    const p = document.createElement("p");
    p.textContent = texto;
    boxTexto.append(img, h3);
    box.append(boxTexto, p);
    return box;

}
// Box
function criarConteudo() {
    const section = criarElemento("section", "conteudo");
    section.append(
        criarConteudoBox(
            "./imgs/alvo01-removebg-preview.png",
            "Missão",
            "Promover o acesso fácil e transparente a informações sobre a rede de saúde de Garanhuns, auxiliando a população a encontrar atendimento certo no momento certo."
        ),
        criarConteudoBox(
            "./imgs/olho01-removebg-preview.png",
            "Visão",
            "Promover o acesso fácil e transparente a informações sobre a rede de saúde de Garanhuns, auxiliando a população a encontrar atendimento certo no momento certo."
        ),
        criarConteudoBox(
            "./imgs/coracao01-removebg-preview.png",
            "Valores",
            "Promover o acesso fácil e transparente a informações sobre a rede de saúde de Garanhuns, auxiliando a população a encontrar atendimento certo no momento certo."
        ),
        criarConteudoBox(
            "./imgs/pessoas01-removebg-preview.png",
            "Nossa Equipe",
            "Promover o acesso fácil e transparente a informações sobre a rede de saúde de Garanhuns, auxiliando a população a encontrar atendimento certo no momento certo."
        ),
        criarConteudoBox(
            "./imgs/localizacao01-removebg-preview.png",
            "Localização",
            "Promover o acesso fácil e transparente a informações sobre a rede de saúde de Garanhuns, auxiliando a população a encontrar atendimento certo no momento certo."
        )
    );

    return section;
}
function criarSobre() {
    const section = criarElemento("section", "sobre");
    const box = criarElemento("div", "sobre-box");
    box.append(
        criarTitulo(),
        criarConteudo()
    );
    section.appendChild(box);
    return section;
}

// Caso o código quebre, coloca o INIT
function initPage() {
    const main = document.querySelector("main") ||
        document.createElement("main");
    if (!document.querySelector("main")) {
        document.body.appendChild(main);
    }
    main.appendChild(criarSobre());
    const footer = document.querySelector("footer");
    document.body.insertBefore(main, footer);
}
document.addEventListener("DOMContentLoaded", initPage);