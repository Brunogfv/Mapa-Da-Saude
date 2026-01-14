const especialidades = [
    {
        nome: "Pediatria",
        imagem: "./imgs/pediatria.png"
    },
    {
        nome: "Cardiologia",
        imagem: "./imgs/cardio001.jpeg"
    },
    {
        nome: "Odontologia",
        imagem: "./imgs/odonto.png"
    },
    {
        nome: "Clínica Geral",
        imagem: "./imgs/clinicaGeral.png"
    }
];

const container = document.getElementById("especialidades-container");

document.querySelectorAll(".specialty-card").forEach(card => {
    card.addEventListener("click", () => {
        const especialidade = card.dataset.especialidade;

        window.location.href = `medicos.html?especialidade=${encodeURIComponent(especialidade)}`;
    });
});

// especialidades.forEach(esp => {
//     const card = document.createElement("div");
//     card.className = "especialidade-card";

//     card.innerHTML = `
//         <img src="${esp.imagem}">
//         <h3>${esp.nome}</h3>
//     `;

//     card.onclick = () => {
//         window.location.href = `medicos.html?especialidade=${encodeURIComponent(esp.nome)}`
//     };

//     container.appendChild(card);
// });