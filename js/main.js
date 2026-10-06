import '../css/styles.css'

// atalho para pegar elementos
const $ = (id) => document.getElementById(id)

/* ================= SIDEBAR MOBILE ================= */
const sidebar = $('sidebar')
const overlay = $('overlay')

function abrirSidebar() {
  sidebar.classList.remove('-translate-x-full')
  overlay.classList.remove('hidden')
}
function fecharSidebar() {
  sidebar.classList.add('-translate-x-full')
  overlay.classList.add('hidden')
}
$('btnAbrirSidebar').addEventListener('click', abrirSidebar)
$('btnFecharSidebar').addEventListener('click', fecharSidebar)
overlay.addEventListener('click', fecharSidebar)

/* ================= DROPDOWN DO USUÁRIO ================= */
const menuUsuario = $('menuUsuario')
$('btnUsuario').addEventListener('click', (e) => {
  e.stopPropagation()
  menuUsuario.classList.toggle('hidden')
})
// clicar fora fecha o menu
document.addEventListener('click', () => menuUsuario.classList.add('hidden'))

/* ================= TEMA (light / dark / system) ================= */
const mediaEscuro = window.matchMedia('(prefers-color-scheme: dark)')

function aplicarTema(tema) {
  const escuro = tema === 'dark' || (tema === 'system' && mediaEscuro.matches)
  document.documentElement.classList.toggle('dark', escuro)

  // destaca o botão do tema escolhido
  document.querySelectorAll('.btn-tema').forEach((btn) => {
    const ativo = btn.dataset.tema === tema
    btn.classList.toggle('bg-indigo-600', ativo)
    btn.classList.toggle('text-white', ativo)
  })
}

function escolherTema(tema) {
  localStorage.setItem('tema', tema)
  aplicarTema(tema)
}

document.querySelectorAll('.btn-tema').forEach((btn) => {
  btn.addEventListener('click', () => escolherTema(btn.dataset.tema))
})

// se o sistema mudar e estiver em "system", atualiza
mediaEscuro.addEventListener('change', () => {
  if ((localStorage.getItem('tema') || 'system') === 'system') aplicarTema('system')
})

aplicarTema(localStorage.getItem('tema') || 'system')

/* ================= BUSCA ================= */
$('busca').addEventListener('input', (e) => {
  const texto = e.target.value.toLowerCase()
  document.querySelectorAll('.projeto').forEach((card) => {
    card.classList.toggle('hidden', !card.textContent.toLowerCase().includes(texto))
  })
})

/* ================= MODAL ================= */
const modal = $('modal')
const form = $('formProjeto')

function abrirModal() {
  modal.classList.remove('hidden')
  modal.classList.add('flex')
}
function fecharModal() {
  modal.classList.add('hidden')
  modal.classList.remove('flex')
  form.reset()
  limparEstados()
}
$('btnNovo').addEventListener('click', abrirModal)
$('btnFecharModal').addEventListener('click', fecharModal)
$('btnCancelar').addEventListener('click', fecharModal)
modal.addEventListener('click', (e) => { if (e.target === modal) fecharModal() })

/* ================= VALIDAÇÃO DO FORMULÁRIO ================= */
function mostrarErro(campo, mensagem) {
  const msg = campo.parentElement.querySelector('.erro')
  campo.classList.remove('border-green-500')
  campo.classList.add('border-red-500')
  msg.textContent = mensagem
  msg.classList.remove('hidden')
}

function mostrarSucesso(campo) {
  const msg = campo.parentElement.querySelector('.erro')
  campo.classList.remove('border-red-500')
  campo.classList.add('border-green-500')
  msg.classList.add('hidden')
}

function limparEstados() {
  document.querySelectorAll('.campo').forEach((c) => {
    c.classList.remove('border-red-500', 'border-green-500')
  })
  document.querySelectorAll('.erro').forEach((m) => m.classList.add('hidden'))
  $('erroPrioridade').classList.add('hidden')
  $('msgSucesso').classList.add('hidden')
}

// retorna true se o campo é válido
function validarCampo(campo) {
  const valor = campo.value.trim()

  if (campo.id === 'nome' && valor.length < 3) return mostrarErro(campo, 'O nome precisa ter pelo menos 3 letras.'), false
  if (campo.id === 'responsavel' && valor.length < 3) return mostrarErro(campo, 'Informe o responsável.'), false
  if (campo.id === 'categoria' && valor === '') return mostrarErro(campo, 'Escolha uma categoria.'), false
  if (campo.id === 'descricao' && valor.length < 10) return mostrarErro(campo, 'Descreva com pelo menos 10 caracteres.'), false

  if (campo.id === 'prazo') {
    if (valor === '') return mostrarErro(campo, 'Informe um prazo.'), false
    const hoje = new Date().toISOString().split('T')[0]
    if (valor < hoje) return mostrarErro(campo, 'O prazo não pode estar no passado.'), false
  }

  mostrarSucesso(campo)
  return true
}

function validarPrioridade() {
  const marcada = form.querySelector('input[name="prioridade"]:checked')
  $('erroPrioridade').textContent = 'Escolha uma prioridade.'
  $('erroPrioridade').classList.toggle('hidden', !!marcada)
  return marcada
}

// valida enquanto o usuário digita / sai do campo
document.querySelectorAll('.campo').forEach((campo) => {
  campo.addEventListener('blur', () => validarCampo(campo))
  campo.addEventListener('input', () => validarCampo(campo))
})

/* ================= ENVIO ================= */
form.addEventListener('submit', (e) => {
  e.preventDefault()

  let tudoOk = true
  document.querySelectorAll('.campo').forEach((c) => {
    if (!validarCampo(c)) tudoOk = false
  })
  const prioridade = validarPrioridade()
  if (!prioridade) tudoOk = false
  if (!tudoOk) return

  criarCard(prioridade.value)
  $('msgSucesso').classList.remove('hidden')
  $('btnSalvar').disabled = true // desabilita enquanto mostra a mensagem

  setTimeout(() => {
    $('btnSalvar').disabled = false
    fecharModal()
  }, 1200)
})

function criarCard(prioridade) {
  const cor = { Baixa: 'text-green-600', Média: 'text-amber-500', Alta: 'text-red-500' }[prioridade]
  const card = document.createElement('article')
  card.className = 'projeto group flex flex-col justify-between rounded-xl bg-white p-5 shadow transition hover:shadow-lg dark:bg-slate-800'
  card.innerHTML = `
    <div><h4 class="font-bold"></h4><p class="text-sm text-slate-500 dark:text-slate-400"></p></div>
    <span class="text-xs ${cor}">Prioridade: ${prioridade}</span>`
  // textContent evita problemas com HTML digitado pelo usuário
  card.querySelector('h4').textContent = $('nome').value
  card.querySelector('p').textContent = $('descricao').value
  $('gridProjetos').prepend(card)
}
