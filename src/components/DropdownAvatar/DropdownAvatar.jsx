import {
  CalendarHeart,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  HandHeart,
  Home,
  HouseHeart,
  LogOut,
  Settings,
  User,
  Users,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import d from './DropdownAvatar.module.scss'

const navLinks = [
  { icon: Home , label: 'Início', path: '/' },
  { icon: HandHeart, label: 'Doação', path: '/doacao' },
  { icon: HouseHeart, label: 'Voluntariado', path: '/voluntariado' },
  { icon: GraduationCap, label: 'Mentoria', path: '/mentoria' },
  { icon: CalendarHeart, label: 'Eventos', path: '/eventos-e-palestras' },
]

export const DropdownAvatar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const droodownRef = useRef(null)

  const toggleDropdown = () => setIsOpen((prev) => !prev)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (droodownRef.current && !droodownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className={d.dropdownContainer} ref={droodownRef}>
      {/** biome-ignore lint/a11y/useButtonType: it's not necesary */}
      <button
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={`${d.dropdownTrigger} ${isOpen ? d.active : ''}`}
        onClick={toggleDropdown}
      >
        {/** biome-ignore lint/correctness/useImageSize: it isn't necessary */}
        <img
          alt="Avatar do perfil do GitHub de Tatyane Gonçalves."
          src="https://avatars.githubusercontent.com/u/158174190?v=4"
        />

        <span>Tatyane Gonçalves</span>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>

      {isOpen && (
        <div className={`${d.dropdownMenu} ${d.scaleInCenter}`}>
          {/* Mappin the navigation links for mobile */}
          {navLinks.map((link) => (
            <Link className={d.mobileOnlyLink} key={link.label} to={link.path}>
              <link.icon size={16} />
              <span>{link.label}</span>
            </Link>
          ))}

          <div className={`${d.divider} ${d.mobileOnlyLink}`} />

          <Link to="/perfil">
            <User size={16} />
            Tatyane Gonçalves
          </Link>
          <Link to="/voluntariados">
            <Users size={16} />
            Voluntariados
          </Link>
          <Link to="/configuracoes">
            <Settings size={16} />
            Configurações de conta
          </Link>
          {/* <Link to="/perfil">Tatyane Gonçalves</Link> */}
          <div className={d.divider} />
          <Link to="/">
            <LogOut size={16} />
            Sair
          </Link>
        </div>
      )}
    </div>
  )
}
