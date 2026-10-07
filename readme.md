# TechFlow - Dashboard de Gestão de Projetos (CP5)

> Check Point 5 (CP5) — Front-End Web Development / Software Engineering

O **TechFlow** é uma aplicação web interativa de gerenciamento de projetos e equipes desenvolvida com foco em usabilidade, design moderno, responsividade e alta performance. O projeto conta com suporte completo a temas (Claro/Escuro/Sistema), validações dinâmicas de formulário e manipulação do DOM via JavaScript puro.

---

## 👥 Integrantes do Grupo

* **Nicolly Florencio Vilela** — RM: 573392
* **Brenda Pricila Chalco Condori** — RM: 571971

---

## 🚀 Tecnologias Utilizadas

* **HTML5:** Estruturação semântica e acessível.
* **Tailwind CSS (v4):** Estilização utilitária, suporte nativo a temas e layout responsivo.
* **JavaScript (ES6+):** Lógica da aplicação, manipulação do DOM e tratamento defensivo de erros.
* **Vite:** Ferramenta de build e servidor de desenvolvimento ultrarrápido.
* **Google Fonts (Plus Jakarta Sans):** Tipografia limpa e moderna.

---

## ✨ Principais Recursos Implementados

* 🌓 **Sistema de Temas Completo (Light / Dark / System):**
  * Alternância dinâmica entre tema Claro, Escuro e Sincronização com o Sistema Operacional.
  * Persistência da preferência do usuário via `localStorage`.

* 📱 **Interface 100% Responsiva:**
  * Sidebar mobile retrátil com efeito *backdrop blur*.
  * Adaptação contínua para dispositivos móveis, tablets e desktops.

* 🔍 **Filtro e Busca em Tempo Real:**
  * Pesquisa dinâmica que exibe e oculta cartões de projetos instantaneamente conforme o texto digitado.

* ➕ **Gestão Dinâmica de Projetos (Modal & Form):**
  * Modal interativo para criação de novos projetos.
  * Inserção de novos cartões diretamente no topo do painel principal.

* ✅ **Validação Avançada de Formulários:**
  * Validação em tempo real (eventos `blur` e `input`).
  * Checagem de tamanho mínimo de texto para Nome e Descrição.
  * Validação lógica de datas (bloqueando prazos passados).
  * Verificação de campos obrigatórios (Categoria e Prioridade) com feedback visual defensivo.

---

## 📌 Critérios Atendidos (CP5)

* [x] Estruturação semântica em HTML5.
* [x] Estilização eficiente e sem redundâncias com Tailwind CSS v4.
* [x] Manipulação do DOM e tratamento seguro com JS puro (ES6+).
* [x] Lógica de validação defensiva e tratamento de inputs do usuário.
* [x] Responsividade e temas (Light/Dark mode) persistentes via `localStorage`.

---

## 🔗 Link do Repositório GitHub

* 📂 **GitHub:** [https://github.com/ninixzzs/CP5-techflow-dashboard](https://github.com/ninixzzs/CP5-techflow-dashboard)

---

## ⚠️ Dificuldades Encontradas

1. **Migração e Configuração do Tailwind CSS v4 com Vite:**
   * A adaptação às diretivas da versão 4 do Tailwind exigiu ajustes finos nas configurações do arquivo `css/styles.css` para garantir o correto funcionamento dos estilos utilitários e variáveis de tema.

2. **Validação de Formulário Defensiva em Tempo Real:**
   * Lidar com o estado dos campos nos eventos `input` e `blur` exigiu cuidado para fornecer feedback visual amigável sem interromper a navegação do usuário antes do envio.

3. **Gerenciamento de Estado do Tema (Light / Dark / System):**
   * Sincronizar as preferências salvas no `localStorage` com a preferência do sistema operacional (`prefers-color-scheme`) e evitar flashes de tema ao carregar a página.

---

## 📁 Estrutura do Projeto

```text
techflow/
├── css/
│   └── styles.css        # Diretivas do Tailwind v4 e animações CSS
├── js/
│   └── main.js           # Lógica JavaScript principal da aplicação
├── index.html            # Estrutura HTML5 da aplicação
├── package.json          # Configurações do projeto e scripts
└── vite.config.js        # Configuração do Vite
