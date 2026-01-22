const container = document.getElementById("cardContainer");

especialidades.forEach(esp => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <a href="medicos.html?especialidade=${encodeURIComponent(esp.nome)}" class="card-link">
            <img src="${esp.imagem}" alt="${esp.nome}">
            <div class="texto">
                <h3>${esp.nome}</h3>
                <p>${esp.descricao}</p>
            </div>
        </a>
    `;

    container.appendChild(card);
});