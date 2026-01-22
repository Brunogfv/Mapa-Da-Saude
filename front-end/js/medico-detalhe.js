const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (!id) {
    console.error("ID do médico não informado");
}

fetch(`http://localhost:3000/medicos/${id}`)
    .then(response => response.json())
    .then(medico => {
        if (!medico) {
            console.error("Médico não encontrado.");
            return;
        }

        document.getElementById("foto").src = `./imgs/${medico.foto}`;
        document.getElementById("foto").alt = medico.nome;
        document.getElementById("nome").textContent = medico.nome;
        document.getElementById("especialidade").textContent = medico.especialidade;
        document.getElementById("descricao").textContent = medico.descricao || "Descrição não disponível";
    })
    .catch(error => {
        console.error("Erro ao carregar médico:", error);
    });