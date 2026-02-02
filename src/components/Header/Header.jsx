import {
  CalendarHeart,
  GraduationCap,
  HandHeart,
  Home,
  HouseHeart,
} from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../../images/logo.png'
import { DropdownAvatar } from '../DropdownAvatar/DropdownAvatar'
import h from './Header.module.scss'

const navLinks = [
  { icon: Home, label: 'Início', path: '/' },
  { icon: HandHeart, label: 'Doação', path: '/doacao' },
  { icon: HouseHeart, label: 'Voluntariado', path: '/voluntariado' },
  { icon: GraduationCap, label: 'Mentoria', path: '/mentoria' },
  { icon: CalendarHeart, label: 'Eventos', path: '/eventos-e-palestras' },
]

export default function Header() {
  const location = useLocation()

  return (
    <header className={h.header}>
      <div className={h.headerContainer}>
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
                <item.icon size={18} />
                {item.label}
              </Link>
            )
          })}
        </nav>

        <DropdownAvatar />
      </div>
    </header>
  )
}
