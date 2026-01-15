// const medicos = [
//     {
//         id: 1,
//         nome: "Dra. Ana Souza",
//         especialidade: "pediatria",
//         imagem: "./imgs/ana.jpg",
//         descricao: "Atendimento especializado para crianças e adolescentes."
//     },
//     {
//         id: 2,
//         nome: "Dr. Luiz Oliveira",
//         especialidade: "cardiologia",
//         imagem: "./imgs/luiz.jpg",
//         descricao: "Especialista em saúde do coração."
//     },
//     {
//         id: 3,
//         nome: "Dra. Camila Santos",
//         especialidade: "clinica-geral",
//         imagem: "./imgs/camila.jpg",
//         descricao: "Acompanhamento pediátrico completo."
//     },
//     {
//         id: 4,
//         nome: "Dr. Roberto Silva",
//         especialidade: "teste2",
//         imagem: "./imgs/roberto.jpg",
//         descricao: "Cuidados odontológicos modernos."
//     }
// ];

const container = document.getElementById("medicosContainer");

const params = new URLSearchParams(window.location.search);
const especialidadeSelecionada = params.get("especialidade");

let url = "http://localhost:3000/medicos";

if (especialidadeSelecionada) {
    url += `?especialidade=${especialidadeSelecionada}`;
}

console.log("Especialidade selecionada: ", especialidadeSelecionada);

fetch(url)
    .then(response => response.json())
    .then(medicos => {
        console.log(medicos);
        if (medicos.length === 0) {
            container.innerHTML = "<p>Nenhum médico encontrado.</p>";
            return;
        }

        // if (especialidadeSelecionada) {
        //     titulo.textContent = `Especialidade: ${medicos[0].especialidade}`;
        // }

        medicos.forEach(medico => {
            const card = document.createElement("div");
            card.classList.add("medico-card");
        
            card.innerHTML = `
                <img src="./imgs/${medico.foto}" alt="${medico.nome}">
                <h3>${medico.nome}</h3>
                <p>${medico.especialidade}</p>
                <p class="descricao">${medico.descricao || "Descrição não disponível"}</p>
                <button data-id="${medico.id}">Ver detalhes</button>
            `;
        
            card.querySelector("button").onclick = () => {
                window.location.href = `medico.html?id=${medico.id}`;
            };
        
            container.appendChild(card);
        });
    })
    .catch(error => {
        console.error("Erro ao buscar médicos:", error);
        container.innerHTML = "<p>Erro ao carregar médicos</p>";
    });
    

if (especialidadeSelecionada) {
    document.body.classList.add("filtro-especialidade");
}


// Busca
// const inputBusca = document.getElementById("busca");

// inputBusca.addEventListener("input", () => {
//     const termo = inputBusca.value.toLowerCase();

//     let resultado = medicos;

//     if (especialidadeSelecionada) {
//         resultado = resultado.filter(m => 
//             m.especialidade === especialidadeSelecionada
//         );
//     }

//     resultado = resultado.filter(m => 
//         m.nome.toLowerCase().includes(termo)
//     );
// });



// function carregarMedicos () {
//     container.innerHTML = "";

//     const filtrados = especialidadeSelecionada ? medicos.filter(m => m.especialidade === especialidadeSelecionada) : medicos;

//     filtrados.forEach(m => {
//         const card = document.createElement("div");
//         card.className = "medico-card";

//         card.innerHTML = `
//             <img src="${m.imagem}">
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