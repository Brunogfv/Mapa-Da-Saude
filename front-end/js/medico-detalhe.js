// const params = new URLSearchParams(window.location.search);
// const id = params.get("id");

// const medicos = [
//     {
//         id: 1,
//         nome: "Dra. Ana Souza",
//         especialidade: "Pediatra",
//         imagem: "./imgs/ana.jpg",
//         descricao: "Atendimento especializado para crianças e adolescentes."
//     },
//     {
//         id: 2,
//         nome: "Dr. Luiz Oliveira",
//         especialidade: "Cardiologia",
//         imagem: "./imgs/luiz.jpg",
//         descricao: "Especialista em saúde do coração."
//     },
//     {
//         id: 3,
//         nome: "Dra. Camila Santos",
//         especialidade: "Pediatria",
//         imagem: "./imgs/camila.jpg",
//         descricao: "Acompanhamento pediátrico completo."
//     },
//     {
//         id: 4,
//         nome: "Dr. Roberto Silva",
//         especialidade: "Dentista",
//         imagem: "./imgs/roberto.jpg",
//         descricao: "Cuidados odontológicos modernos."
//     }
// ];

// const medico = medicos.find(m => m.id == id);

// if (medico) {
//     document.getElementById("foto").src = medico.imagem;
//     document.getElementById("nome").textContent = medico.nome;
//     document.getElementById("especialidade").textContent = medico.especialidade;
//     document.getElementById("descricao").textContent = medico.descricao;
// }