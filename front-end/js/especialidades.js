// Seleciona cards já existentes no HTML
document.querySelectorAll(".specialty-card").forEach(card => {
    card.addEventListener("click", () => {
        const especialidade = card.dataset.especialidade;

        window.location.href = `medicos.html?especialidade=${encodeURIComponent(especialidade)}`;
    });
});
