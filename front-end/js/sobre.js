function criarElemento(tag, className = null) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    return el;
}

function criarIcone(svgHtml) {
    const wrapper = criarElemento("div", "icone-svg");
    wrapper.innerHTML = svgHtml;
    return wrapper;
}

const ICONES = {
    missao: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0891B2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 6a6 6 0 100 12 6 6 0 000-12z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 10a2 2 0 100 4 2 2 0 000-4z" /></svg>`,
    visao: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0891B2"><path stroke-linecap="round" stroke-linejoin="round" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>`,
    valores: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0891B2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>`,
    equipe: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0891B2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>`,
    localizacao: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0891B2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>`
};

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
function criarConteudoBox(icone, titulo, texto) {
    const box = criarElemento("div", "conteudo-box");
    const boxTexto = criarElemento("div", "conteudo-box-texto");
    const wrapper = criarIcone(icone);
    const h3 = document.createElement("h3");
    h3.textContent = titulo;
    const p = document.createElement("p");
    p.textContent = texto;
    boxTexto.append(wrapper, h3);
    box.append(boxTexto, p);
    return box;
}

// Box
function criarConteudo() {
    const section = criarElemento("section", "conteudo");
    section.append(
        criarConteudoBox(
            ICONES.missao,
            "Missão",
            "Promover o acesso fácil e transparente a informações sobre a rede de saúde de Garanhuns, auxiliando a população a encontrar atendimento certo no momento certo."
        ),
        criarConteudoBox(
            ICONES.visao,
            "Visão",
            "Promover o acesso fácil e transparente a informações sobre a rede de saúde de Garanhuns, auxiliando a população a encontrar atendimento certo no momento certo."
        ),
        criarConteudoBox(
            ICONES.valores,
            "Valores",
            "Promover o acesso fácil e transparente a informações sobre a rede de saúde de Garanhuns, auxiliando a população a encontrar atendimento certo no momento certo."
        ),
        criarConteudoBox(
            ICONES.equipe,
            "Nossa Equipe",
            "Promover o acesso fácil e transparente a informações sobre a rede de saúde de Garanhuns, auxiliando a população a encontrar atendimento certo no momento certo."
        ),
        criarConteudoBox(
            ICONES.localizacao,
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