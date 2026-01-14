const especialidades = [
    {
        nome: "Pediatria",
        descricao: "Cuidados médicos especializados para crianças e adolescentes",
        imagem: "./imgs/bebe001.jpeg",
        slug: "pediatria"
    },
    {
        nome: "Cardiologia",
        descricao: "Diagnóstico e tratamento de doenças do coração",
        imagem: "./imgs/cardio001.jpeg",
        slug: "cardiologia"
    },
    {
        nome: "Clínica Geral",
        descricao: "Atendimento para consultas de rotina e prevenção de doenças",
        imagem: "./imgs/clinicaGeral.png",
        slug: "clinica-geral"
    },
    {
        nome: "Odontologia",
        descricao: "Tratamentos dentários e cuidados com a saúde bucal",
        imagem: "./imgs/odonto.png",
        slug: "dentista"
    },
    {
        nome: "Ginecologia",
        descricao: "Cuidando da saúde feminina com atenção e respeito",
        imagem: "./imgs/ginecologista001.jpg",
        slug: "ginecologista"
    },
    {
        nome: "Reumatologia",
        descricao: "Cuidando das articulações, músculos e ossos",
        imagem: "./imgs/reumatologista001.jpg",
        slug: "reumatologista"
    }
];


const container = document.querySelector(".card-container");

especialidades.forEach(especialidade => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${especialidade.imagem}" alt="${especialidade.nome}">
        <div class="texto">
            <h3>${especialidade.nome}</h3>
            <p>${especialidade.descricao}</p>
        </div>
    `;

    card.addEventListener("click", () => {
        window.location.href = `medicos.html?especialidade=${especialidade.slug}`;
    });

    container.appendChild(card);
});