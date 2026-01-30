import { Link, useLocation } from 'react-router-dom'
import useMenu from '../../hooks/useMenu'
import m from './MenuMobile.module.scss'

const navLinks = [
  { label: 'Início', path: '/' },
  { label: 'Doação', path: '/doacao' },
  { label: 'Voluntariado', path: '/voluntariado' },
  { label: 'Mentoria', path: '/mentoria' },
  { label: 'Eventos', path: '/eventos-e-palestras' },
]

export default function MenuMobile() {
  const { toggleMenu, isMenuOpen } = useMenu()
  const location = useLocation()

  return (
    // biome-ignore lint/a11y/noNoninteractiveElementInteractions: it isn't necessary
    // biome-ignore lint/a11y/useKeyWithClickEvents: it isn't necessary
    <nav
      className={`${m.navBar} ${isMenuOpen ? m.menuActive : ''}`}
      onClick={toggleMenu}
    >
      {navLinks.map((item) => {
        const isActive = location.pathname === item.path

        return (
          <Link
            className={`${isActive ? m.linkActive : m.link}`}
            key={item.label}
            to={item.path}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
