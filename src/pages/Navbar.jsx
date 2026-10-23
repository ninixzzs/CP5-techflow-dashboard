import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header>
      <nav>
        <NavLink to="/">🍣 Sakura Sushi</NavLink>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/cardapio">Cardápio</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}