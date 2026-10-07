#  TechFlow - Dashboard de Gestão de Projetos (CP5)

> **Check Point 5 (CP5)** — Front-End Web Development / Software Engineering

O **TechFlow** é uma aplicação web interativa de gerenciamento de projetos e equipes desenvolvida com foco em usabilidade, design moderno, responsividade e alta performance. O projeto conta com suporte completo a temas (Claro/Escuro), validações dinâmicas de formulário e manipulação do DOM via JavaScript.

## 👥 Integrantes do Grupo

* **Nicolly Florencio Vilela** — RM: `573392`
* **Brenda Chalco Condori** — RM: `571971`

## 🚀 Tecnologias Utilizadas

* **HTML5**: Estrutura semântica e acessível.
* **Tailwind CSS (v4)**: Estilização utilitária, suporte nativo a temas e layout responsivo.
* **JavaScript (ES6+)**: Lógica da aplicação, manipulação do DOM e tratamento defensivo de erros.
* **Vite**: Ferramenta de build e servidor de desenvolvimento ultrarrápido.
* **Google Fonts (Plus Jakarta Sans)**: Tipografia limpa e moderna.

## ✨ Funcionalidades Principais

* 🌓 **Sistema de Temas Completo (Light / Dark / System)**
  * Alternância dinâmica entre tema Claro, Escuro e Sincronização com o Sistema Operacional.
  * Persistência da preferência do usuário via `localStorage`.

* 📱 **Interface 100% Responsiva**
  * Sidebar mobile retrátil com fundo desfocado (*backdrop blur*).
  * Adaptação perfeita para celulares, tablets e desktops.

* 🔍 **Filtro e Busca em Tempo Real**
  * Pesquisa dinâmica que oculta/exibe cartões de projetos conforme o texto digitado.

* ➕ **Gestão de Projetos (Modal & Form)**
  * Modal interativo para criação de novos projetos.
  * Inserção dinâmica dos novos cartões diretamente no topo do painel.

* ✅ **Validação Avançada de Formulários**
  * Validação em tempo real (nos eventos `blur` e `input`).
  * Checagem de tamanho mínimo de texto para Nome e Descrição.
  * Validação de datas para evitar Prazos no passado.
  * Verificação de campos obrigatórios (Categoria e Prioridade).
  * Feedback visual amigável sem bloqueio de execução.

## 📁 Estrutura de Pastas e Arquivos

```text
techflow/
├── css/
│   └── styles.css        # Diretivas do Tailwind v4 e animações CSS
├── js/
│   └── main.js           # Lógica JavaScript principal da aplicação
├── node_modules/         # Dependências do projeto
├── .gitignore            # Arquivos ignorados pelo Git
├── index.html            # Estrutura HTML5 da aplicação
├── package-lock.json     # Lockfile do NPM
├── package.json          # Configurações do projeto e scripts
└── vite.config.js        # Configuração do Vite
```

## 🛠️ Como Executar o Projeto Localmente

### Pré-requisitos

Certifique-se de ter o [**Node.js**](https://nodejs.org/) (versão 18 ou superior) instalado em sua máquina.

### Passo a Passo

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acesse no navegador:**
   Abra o endereço exibido no terminal (por padrão: `http://localhost:5173/`).

## 🔧 Scripts Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor local com Hot Module Replacement (HMR). |
| `npm run build` | Gera a versão otimizada para produção na pasta `dist`. |
| `npm run preview` | Executa a versão de produção localmente para testes. |

## 📌 Critérios Atendidos (CP5)

- [x] Estruturação semântica em HTML5.
- [x] Estilização sem redundâncias utilizando Tailwind CSS v4.
- [x] Manipulação do DOM e tratamento seguro com JS puro (ES6+).
- [x] Lógica de validação defensiva e tratamento de inputs do usuário.
- [x] Responsividade e temas (Light/Dark mode) persistentes