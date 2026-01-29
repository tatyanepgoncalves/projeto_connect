import { Link, useLocation } from 'react-router-dom'
import useMenu from '../../hooks/useMenu'
import m from './MenuMobile.module.scss'

const navLinks = [
  { label: "Início", path: "/" },
  { label: "Doação", path: "/doacao" },
  { label: "Voluntariado", path: "/voluntariado" },
  { label: "Mentoria", path: "/mentoria" },
  { label: "Eventos & Palestras", path: "/eventos-e-palestras" },
]

export default function MenuMobile() {
  const { toggleMenu, isMenuOpen } = useMenu()
  const location = useLocation()
  

  return (
    <nav
      aria-label={isMenuOpen ? 'Abrir menu' : 'Fechar menu'}
      className={`${m.navBar} ${isMenuOpen ? m.menuActive : ''}`}
      onClick={toggleMenu}
    >
      {navLinks.map((item) => {
        const isActive = location.pathname  === item.path

        return (
        <Link key={item.label} to={item.path} className={ `${isActive ? m.linkActive : m.link}`}>
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
