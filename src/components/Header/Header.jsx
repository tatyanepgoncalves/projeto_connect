import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import useMenu from '../../hooks/useMenu'
import Logo from '../../images/logo.png'
import MenuMobile from '../MenuMobile/MenuMobile'
import h from './Header.module.scss'

export default function Header() {
  const { toggleMenu, isMenuOpen } = useMenu()

  return (
    <header className={h.Header}>
      <div className={h.HeaderContainer}>
        <Link className={h.Logo} to="/">
          {/** biome-ignore lint/correctness/useImageSize: it isn't necessary */}
          <img alt="Logo da página Connect de voluntários." src={Logo} />
        </Link>

        <section className={h.btnsAction}>
          {isMenuOpen && (
            <div className={`${h.overlay} ${isMenuOpen ? h.open : ''}`}>
              <MenuMobile />
            </div>
          )}

          <section className={h.Avatar}>
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
