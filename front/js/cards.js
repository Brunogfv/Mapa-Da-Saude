const especialidades = [
    {
        nome: "Pediatria",
        descricao: "Cuidados médicos especializados para crianças e adolescentes",
        imagem: "./imgs/bebe001.jpeg"
    },
    {
        nome: "Cardiologia",
        descricao: "Diagnóstico e tratamento de doenças do coração",
        imagem: "./imgs/cardio001.jpeg"
    },
    {
        nome: "Clínica Geral",
        descricao: "Consultas de rotina e prevenção de doenças",
        imagem: "./imgs/clinicaGeral.png"
    },
    {
        nome: "Odontologia",
        descricao: "Tratamentos dentários e cuidados com a saúde bucal",
        imagem: "./imgs/odonto.png"
    }
];

const container = document.getElementById("cardContainer");

especialidades.forEach(esp => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${esp.imagem}" alt="${esp.nome}">
        <div class="texto">
            <h3>${esp.nome}</h3>
            <p>${esp.descricao}</p>
        </div>
    `;

    container.appendChild(card);
});