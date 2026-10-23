import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/cardapio', label: 'Cardápio' },
]

const estilo = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm font-medium transition ${
    isActive ? 'bg-red-700 text-white' : 'text-gray-200 hover:bg-gray-800'
  }`

export default function Navbar() {
  return (
    <header className="bg-gray-900 shadow-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <NavLink to="/" className="text-xl font-bold text-white">
          🍣 Sakura Sushi
        </NavLink>
        <ul className="flex gap-2">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={estilo}>{l.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}