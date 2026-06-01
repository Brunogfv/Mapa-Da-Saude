// Leitura dos parâmetros da URL
const params = new URLSearchParams(window.location.search);

// Extrai o valor id do parâmetro
const id = params.get("id");

const detalheContainer = document.querySelector(".medico-container");

function mostrarSkeleton() {
    detalheContainer.innerHTML = `
        <div class="skeleton-detalhe">
            <div class="skeleton-img-lg"></div>
            <div class="skeleton-info">
                <div class="skeleton-line"></div>
                <div class="skeleton-line"></div>
                <div class="skeleton-line"></div>
                <div class="skeleton-line"></div>
            </div>
        </div>
    `;
}

function mostrarErro(mensagem) {
    detalheContainer.innerHTML = `
        <div class="erro-carregamento" style="text-align:center;width:100%;padding:40px;">
            <p>${mensagem}</p>
            <button class="btn-tentar-novamente">Tentar novamente</button>
        </div>
    `;
    document.querySelector(".btn-tentar-novamente").addEventListener("click", () => {
        window.location.reload();
    });
}

if (!id) {
    mostrarErro("ID do médico não informado.");
} else {
    mostrarSkeleton();

    fetch(`${API_BASE_URL}/medicos/${id}`)
        .then(response => {
            if (!response.ok) throw new Error(`Erro ${response.status}`);
            return response.json();
        })
        .then(medico => {
            if (!medico) {
                mostrarErro("Médico não encontrado.");
                return;
            }

            detalheContainer.innerHTML = `
                <div class="medico-foto">
                    <img id="foto" src="./imgs/${medico.foto}" alt="${medico.nome}">
                </div>
                <div class="medico-info">
                    <h2 id="nome">${medico.nome}</h2>
                    <h4 id="especialidade">${medico.especialidade}</h4>
                    <p id="descricao">${medico.descricao || "Descrição não disponível"}</p>
                    <a class="btn-voltar" href="medicos.html">← Voltar</a>
                </div>
            `;
        })
        .catch(error => {
            console.error("Erro ao carregar médico:", error);
            mostrarErro("Erro ao carregar dados do médico. Verifique sua conexão.");
        });
}