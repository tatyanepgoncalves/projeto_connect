import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import l from "./Layout.module.scss"

export default function Layout() {
  return (
    <div className={l.Layout}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
