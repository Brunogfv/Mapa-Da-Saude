const medicos = [
    {
        id: 1,
        nome: "Dra. Ana Souza",
        especialidade: "Pediatria",
        imagem: "./imgs/ana.jpg",
        descricao: "Atendimento especializado para crianças e adolescentes."
    },
    {
        id: 2,
        nome: "Dr. Luiz Oliveira",
        especialidade: "Cardiologia",
        imagem: "./imgs/luiz.jpg",
        descricao: "Especialista em saúde do coração."
    },
    {
        id: 3,
        nome: "Dra. Camila Santos",
        especialidade: "Pediatria",
        imagem: "./imgs/camila.jpg",
        descricao: "Acompanhamento pediátrico completo."
    },
    {
        id: 4,
        nome: "Dr. Roberto Silva",
        especialidade: "Dentista",
        imagem: "./imgs/roberto.jpg",
        descricao: "Cuidados odontológicos modernos."
    }
];

const container = document.getElementById("medicosContainer");

medicos.forEach(medico => {
    const card = document.createElement("div");
    card.classList.add("medico-card");

    card.innerHTML = `
        <img src="${medico.imagem}" alt="${medico.nome}">
        <h3>${medico.nome}</h3>
        <p>${medico.especialidade}</p>
        <button>Ver detalhes</button>
    `;

    card.querySelector("button").addEventListener("click", () => {
        window.location.href = `medico.html?id=${medico.id}`;
    });

    container.appendChild(card);
});

const params = new URLSearchParams(window.location.search);
const especialidadeSelecionada = params.get("especialidade");

// const container = document.getElementById("medicos-container");

// function carregarMedicos () {
//     container.innerHTML = "";

    const filtrados = especialidadeSelecionada ? medicos.filter(m => m.especialidade === especialidadeSelecionada) : medicos;

//     filtrados.forEach(m => {
//         const card = document.createElement("div");
//         card.className = "medico-card";

//         card.innerHTML = `
//             <img src="${m.foto}">
//             <h3>${m.nome}</h3>
//             <p>${m.especialidade}</p>
//         `;

//         card.onclick = () => {
//             window.location.href = `medico.html?id=${m.id}`;
//         };

//         container.appendChild(card);
//     });
// }

// carregarMedicos();