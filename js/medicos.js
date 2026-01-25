// Seleção do container onde vão inserir os cards
const container = document.getElementById("medicosContainer");

// Leitura dos parâmetros da URL
const params = new URLSearchParams(window.location.search);

// Extrai o valor do parâmetro especialidade
const especialidadeSelecionada = params.get("especialidade");


if (especialidadeSelecionada) {
    document.body.classList.add("filtro-especialidade");
}

const inputBusca = document.getElementById("buscaNome");

// Pesquiva via texto
if (inputBusca) {
    inputBusca.addEventListener("input", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        carregarMedicos();
    });
}

// Pesquisa via botão
document.getElementById("btnBuscar").addEventListener("click", () => {
    carregarMedicos();
});

const temFiltro = especialidadeSelecionada || params.get("busca");

if (temFiltro) {
    document.body.classList.add("modo-filtro");
}

// Função Principal
function carregarMedicos() {
    let url = "https://mapa-da-saude.onrender.com/medicos";

    const params = [];

    if (especialidadeSelecionada) {
        params.push(`especialidade=${especialidadeSelecionada}`);
    }

    if (inputBusca.value.trim() !== "") {
        params.push(`busca=${encodeURIComponent(inputBusca.value)}`);
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