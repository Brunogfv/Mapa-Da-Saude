const container = document.getElementById("medicosContainer");
const paginacao = document.getElementById("medicosPaginacao");

const params = new URLSearchParams(window.location.search);
const especialidadeSelecionada = params.get("especialidade");

if (especialidadeSelecionada) {
    document.body.classList.add("filtro-especialidade");
}

const inputBusca = document.getElementById("buscaNome");

if (inputBusca) {
    inputBusca.addEventListener("input", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        paginaAtual = 1;
        carregarMedicos();
    });
}

document.getElementById("btnBuscar").addEventListener("click", () => {
    paginaAtual = 1;
    carregarMedicos();
});

const temFiltro = especialidadeSelecionada || params.get("busca");
if (temFiltro) {
    document.body.classList.add("modo-filtro");
}

let paginaAtual = 1;
let totalPaginas = 1;

function mostrarSkeleton() {
    container.innerHTML = "";
    for (let i = 0; i < 6; i++) {
        const skeleton = document.createElement("div");
        skeleton.className = "skeleton-card";
        skeleton.innerHTML = `
            <div class="skeleton-img"></div>
            <div class="skeleton-line"></div>
            <div class="skeleton-line"></div>
        `;
        container.appendChild(skeleton);
    }
}

function mostrarErro(mensagem) {
    container.innerHTML = `
        <div class="erro-carregamento">
            <p>${mensagem}</p>
            <button class="btn-tentar-novamente">Tentar novamente</button>
        </div>
    `;
    document.querySelector(".btn-tentar-novamente").addEventListener("click", carregarMedicos);
}

function renderizarPaginacao() {
    if (!paginacao || totalPaginas <= 1) {
        if (paginacao) paginacao.innerHTML = "";
        return;
    }

    let html = "";
    for (let i = 1; i <= totalPaginas; i++) {
        html += `<button class="btn btn-pagina ${i === paginaAtual ? 'ativo' : ''}" data-pagina="${i}">${i}</button>`;
    }
    paginacao.innerHTML = html;

    paginacao.querySelectorAll(".btn-pagina").forEach((btn) => {
        btn.addEventListener("click", () => {
            paginaAtual = Number(btn.dataset.pagina);
            window.scrollTo({ top: 0, behavior: "smooth" });
            carregarMedicos();
        });
    });
}

function carregarMedicos() {
    mostrarSkeleton();
    if (paginacao) paginacao.innerHTML = "";

    const queryParams = new URLSearchParams();
    queryParams.set("pagina", paginaAtual);
    queryParams.set("limite", 12);

    if (especialidadeSelecionada) {
        queryParams.set("especialidade", especialidadeSelecionada);
    }

    if (inputBusca && inputBusca.value.trim() !== "") {
        queryParams.set("busca", inputBusca.value.trim());
    }

    const url = `${API_BASE_URL}/medicos?${queryParams.toString()}`;

    fetch(url)
        .then(res => {
            if (!res.ok) throw new Error(`Erro ${res.status}`);
            return res.json();
        })
        .then(data => {
            container.innerHTML = "";

            // Suporta formato novo {dados, total} e antigo (array direto)
            const medicos = Array.isArray(data) ? data : (data.dados || []);
            totalPaginas = Array.isArray(data) ? 1 : (data.totalPaginas || 1);

            if (medicos.length === 0) {
                container.innerHTML = `<p class="nenhum-medico">Nenhum médico encontrado.</p>`;
                return;
            }

            medicos.forEach(medico => {
                const card = document.createElement("div");
                card.classList.add("medico-card");

                card.innerHTML = `
                    <img src="./imgs/${medico.foto}" alt="${medico.nome}" onerror="this.src='./imgs/placeholder.svg'">
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

            renderizarPaginacao();
        })
        .catch(err => {
            console.error("Erro:", err);
            mostrarErro("Erro ao carregar médicos. Verifique sua conexão.");
        });
}

carregarMedicos();
