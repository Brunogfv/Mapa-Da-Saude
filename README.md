# 🩺 Mapa da Saúde

## 📘 Descrição do Projeto
O **Mapa da Saúde** é um sistema web desenvolvido como parte da disciplina **Programação Web**, no **3º período do curso de Análise e Desenvolvimento de Sistemas**.

O projeto tem como objetivo funcionar como um **guia médico digital**, permitindo que usuários encontrem **médicos e especialidades de saúde** de forma organizada, intuitiva e eficiente, por meio de filtros, busca textual e navegação por especialidades.

Além dos conceitos básicos de front-end, o projeto foi expandido para incluir **backend, banco de dados e consumo de API**, simulando uma aplicação web completa, com separação clara entre camadas.

---

## 👨‍💻 Desenvolvedores
- **Alberto Breno Belo Lopes**
- **Bruno Gomes Falcão Vilela**
- **Marcelo Augusto Teixeira Barbosa**

---

## 🧩 Tecnologias Utilizadas

### 🔹 Front-end
- **HTML5** — Estruturação semântica das páginas  
- **CSS3** — Estilização e layout responsivo  
- **JavaScript (Vanilla)** — Renderização dinâmica de conteúdos, filtros e buscas  

### 🔹 Back-end
- **Node.js** — Ambiente de execução JavaScript no servidor  
- **Express.js** — Framework para criação da API REST  
- **CORS** — Controle de acesso entre front-end e back-end  

### 🔹 Banco de Dados
- **SQLite** — Banco de dados relacional leve  
- **DB Browser for SQLite** — Gerenciamento e manutenção do banco  

---

## 🗄️ Modelagem de Dados

### 📌 Tabela `especialidades`
- `id`
- `nome`
- `descricao`
- `slug`

### 📌 Tabela `medicos`
- `id`
- `nome`
- `especialidade_id`
- `foto`
- `descricao`

O relacionamento entre médicos e especialidades é feito por **chave estrangeira**, garantindo integridade referencial.

---

## 🔌 Arquitetura do Sistema
O sistema segue uma arquitetura **cliente-servidor**, composta por:

- **Front-end**: Interface e interação com o usuário  
- **Back-end (API REST)**: Regras de negócio e acesso ao banco  
- **Banco de Dados**: Persistência das informações  

A comunicação ocorre via **requisições HTTP**, retornando dados no formato **JSON**.

---

## 🔍 Funcionalidades

- ✅ Listagem dinâmica de médicos  
- ✅ Filtro por especialidade  
- ✅ Busca por nome e especialidade  
- ✅ Página de detalhes do médico  
- ✅ Persistência de dados em banco SQLite  
- ✅ Formulário de contato com salvamento em arquivo `.txt`  

---

## 🧠 Funcionamento de Filtros e Buscas

- Busca textual utilizando SQL com `LIKE`
- Filtro por especialidade baseado em `slug`
- Possibilidade de combinação entre busca e filtro
- Parâmetros enviados via **query string**

Exemplo:

medicos.html?especialidade=cardiologia

---

## 📂 ## 📂 Estrutura do Projeto

A organização dos diretórios do projeto **Mapa da Saúde** segue uma estrutura modular, separando claramente **front-end**, **back-end** e **banco de dados**, conforme apresentado a seguir:

```text
Mapa-Da-Saude/
│
├── back-end/
│   ├── controllers/
│   │   └── medico.controller.js
│   ├── routes/
│   │   └── medico.routes.js
│   ├── database/
│   │   └── database.js
│   ├── app.js
│   └── server.js
│
├── front-end/
│   ├── css/
│   ├── js/
│   │   ├── medicos.js
│   │   └── home.js
│   ├── imgs/
│   ├── index.html
│   ├── medicos.html
│   ├── medico.html
│   └── contato.html
│
└── database.sqlite
```
---

## 🎓 Aprendizados

Durante o desenvolvimento do projeto, foram aplicados e consolidados conceitos como:

- Separação entre front-end e back-end  
- Criação e consumo de APIs REST  
- Modelagem de banco de dados relacional  
- Manipulação dinâmica do DOM com JavaScript  
- Organização de código em camadas  
- Integração entre interface, servidor e banco  

---

## 🚀 Considerações Finais

O **Mapa da Saúde** evoluiu de um projeto estático para uma aplicação web completa, simulando um cenário real de desenvolvimento de sistemas, aplicando boas práticas e conceitos fundamentais da disciplina de Programação Web.

