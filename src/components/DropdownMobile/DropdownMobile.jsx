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
import { Link, useLocation } from 'react-router-dom'
import d from './DropdownMobile.module.scss'

const navLinks = [
  { icon: Home, label: 'Início', path: '/' },
  { icon: HandHeart, label: 'Doação', path: '/doacao' },
  { icon: HouseHeart, label: 'Voluntariado', path: '/voluntariado' },
  { icon: GraduationCap, label: 'Mentoria', path: '/mentoria' },
  { icon: CalendarHeart, label: 'Eventos', path: '/eventos-e-palestras' },
]

const otherNavLinks = [
  { icon: User, label: 'Tatyane Gonçalves', path: '/perfil' },
  { icon: Users, label: 'Voluntariados', path: '/voluntariados' },
  { icon: Settings, label: 'Configurações de conta', path: '/confifuracoes' },
  { icon: LogOut, label: 'Sair', path: '/sair' },
]

export default function DropdownMobile() {
  const [isOpen, setIsOpen] = useState(false)
  const droodownRef = useRef(null)
  const location = useLocation()

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
    <div className={d.dropdownContainerMobile} ref={droodownRef}>
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
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path

            return (
              <Link
                className={`${d.mobileOnlyLink} ${d.mobileOnlyLinkMobile} ${isActive ? d.linkActive : d.linkDefault}`}
                key={link.label}
                to={link.path}
              >
                <link.icon size={16} />
                <span>{link.label}</span>
              </Link>
            )
          })}

          <div className={`${d.divider} ${d.mobileOnlyLine}`} />

          {otherNavLinks.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                className={`${d.mobileOnlyLink} ${isActive ? d.linkActive : d.linkDefault}`}
                key={item.label}
                to={item.path}
              >
                <item.icon size={16} />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
