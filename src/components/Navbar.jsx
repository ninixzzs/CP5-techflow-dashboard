import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/cardapio', label: 'Cardápio' },
]

const estilo = ({ isActive }) =>
  `block rounded-md px-3 py-2 text-sm font-medium transition ${
    isActive ? 'bg-red-700 text-white' : 'text-gray-200 hover:bg-gray-800'
  }`

export default function Navbar() {
  const [aberto, setAberto] = useState(false)

  return (
    <header className="bg-gray-900 shadow-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logótipo com o link direto da imagem do gatinho */}
        <NavLink to="/" className="flex items-center gap-3 transition hover:opacity-90">
          <img 
            src="https://img.freepik.com/vetores-premium/gato-da-sorte-design-plano-arte-vetorial-icone-do-gato-da-sorte-chines_692702-12790.jpg?w=1060" 
            alt="Sakura Sushi Logo" 
            className="h-10 w-10 object-cover rounded-full border border-red-700/50 shadow" 
          />
          <span className="text-xl font-bold tracking-wide text-white">
            Sakura <span className="text-red-500">Sushi</span>
          </span>
        </NavLink>

        <button
          className="text-2xl text-white md:hidden"
          onClick={() => setAberto(!aberto)}
          aria-label="Abrir menu"
        >
          {aberto ? '✕' : '☰'}
        </button>

        {/* Links principais (Desktop) */}
        <ul className="hidden items-center gap-3 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={estilo}>{l.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Menu mobile */}
      {aberto && (
        <ul className="flex flex-col gap-2 px-4 pb-4 md:hidden">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={estilo} onClick={() => setAberto(false)}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}