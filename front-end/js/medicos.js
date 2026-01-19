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

// let url = "http://localhost:3000/medicos";

// if (especialidadeSelecionada) {
//     url += `?especialidade=${especialidadeSelecionada}`;
// }

// console.log("Especialidade selecionada: ", especialidadeSelecionada);

// fetch(url)
//     .then(response => response.json())
//     .then(medicos => {
//         console.log(medicos);
//         if (medicos.length === 0) {
//             container.innerHTML = "<p>Nenhum médico encontrado.</p>";
//             return;
//         }

        // if (especialidadeSelecionada) {
        //     titulo.textContent = `Especialidade: ${medicos[0].especialidade}`;
        // }

    //     medicos.forEach(medico => {
    //         const card = document.createElement("div");
    //         card.classList.add("medico-card");
        
    //         card.innerHTML = `
    //             <img src="./imgs/${medico.foto}" alt="${medico.nome}">
    //             <h3>${medico.nome}</h3>
    //             <p>${medico.especialidade}</p>
    //             <p class="descricao">${medico.descricao || "Descrição não disponível"}</p>
    //             <button data-id="${medico.id}">Ver detalhes</button>
    //         `;
        
    //         card.querySelector("button").onclick = () => {
    //             window.location.href = `medico.html?id=${medico.id}`;
    //         };
        
    //         container.appendChild(card);
    //     });
    // })
    // .catch(error => {
    //     console.error("Erro ao buscar médicos:", error);
    //     container.innerHTML = "<p>Erro ao carregar médicos</p>";
    // });
    

if (especialidadeSelecionada) {
    document.body.classList.add("filtro-especialidade");
}


// Busca

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

const inputBusca = document.getElementById("buscaNome");

inputBusca.addEventListener("input", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    carregarMedicos();
});

document.getElementById("btnBuscar").addEventListener("click", () => {
    carregarMedicos();
});

const temFiltro = especialidadeSelecionada || params.get("busca");

if (temFiltro) {
    document.body.classList.add("modo-filtro");
}

function carregarMedicos() {
    let url = "http://localhost:3000/medicos";

    const params = [];

    if (especialidadeSelecionada) {
        params.push(`especialidade=${especialidadeSelecionada}`);
    }

    if (inputBusca.value.trim() !== "") {
        params.push(`nome=${encodeURIComponent(inputBusca.value)}`);
    }

    if (params.length > 0) {
        url += "?" + params.join("&");
    }

    fetch(url)
        .then(res => res.json())
        .then(medicos => {
            container.innerHTML = "";

            if (medicos.length === 0) {
                container.innerHTML = `<p class="nenhum-medico"> Nenhum médico encontrado.</p>`;
                return;
            }

            medicos.forEach(medico => {
                const card = document.createElement("div");
                card.classList.add("medico-card");

                card.innerHTML = `
                    <img src="./imgs/${medico.foto}" alt="${medico.nome}">
                    <h3>${medico.nome}</h3>
                    <p>${medico.especialidade}</p>
                    <p class="descricao">${medico.descricao ?? ""}</p>
                    <button>Ver detalhes</button>
                `;

                card.querySelector("button").onclick = () => {
                    window.location.href = `medico.html?id=${medico.id}`;
                };

                container.appendChild(card);
            });
        })
        .catch(err => {
            console.error("Erro:", err);
            container.innerHTML = "<p>Erro ao carregar médicos</p>";
        });
}

carregarMedicos();