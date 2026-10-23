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
        <NavLink to="/" className="text-xl font-bold text-white">
          🍣 Sakura Sushi
        </NavLink>

        <button
          className="text-2xl text-white md:hidden"
          onClick={() => setAberto(!aberto)}
          aria-label="Abrir menu"
        >
          {aberto ? '✕' : '☰'}
        </button>

        <ul className="hidden gap-2 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={estilo}>{l.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {aberto && (
        <ul className="flex flex-col gap-1 px-4 pb-4 md:hidden">
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