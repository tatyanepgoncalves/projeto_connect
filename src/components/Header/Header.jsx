import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import useMenu from '../../hooks/useMenu'
import Logo from '../../images/logo.png'
import MenuMobile from '../MenuMobile/MenuMobile'
import h from './Header.module.scss'

const navLinks = [
  { label: 'Início', path: '/' },
  { label: 'Doação', path: '/doacao' },
  { label: 'Voluntariado', path: '/voluntariado' },
  { label: 'Mentoria', path: '/mentoria' },
  { label: 'Eventos', path: '/eventos-e-palestras' },
]

export default function Header() {
  const { toggleMenu, isMenuOpen } = useMenu()
  const location = useLocation()

  return (
    <header className={h.Header}>
      <div className={h.HeaderContainer}>
        <Link className={h.Logo} to="/">
          {/** biome-ignore lint/correctness/useImageSize: it isn't necessary */}
          <img alt="Logo da página Connect de voluntários." src={Logo} />
        </Link>

        <nav className={h.navbarDesktop}>
          {navLinks.map((item) => {
            const isActive = location.pathname === item.path

            return (
              <Link
                className={`${h.link} ${isActive ? h.linkActive : h.linkDefault}`}
                key={item.path}
                to={item.path}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <section className={h.btnsAction}>
          {isMenuOpen && (
            <div className={`${h.overlay} ${isMenuOpen ? h.open : ''}`}>
              <MenuMobile />
            </div>
          )}

          <section className={h.Avatar}>
            {/** biome-ignore lint/correctness/useImageSize: it ins't necessary */}
            <img
              alt="Avatar de Tatyane Gonçalves"
              src="https://avatars.githubusercontent.com/u/158174190?v=4"
            />
          </section>

          <button className={h.menuBtn} onClick={toggleMenu} type="button">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </section>
      </div>
    </header>
  )
}
