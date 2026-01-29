import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import DoacaoPage from './pages/DoacaoPage/DoacaoPage'
import EventosPage from './pages/EventosPage/EventosPage'
import HomePage from './pages/HomePage/HomePage'
import MentoriaPage from './pages/MentoriaPage/MentoriaPage'
import UsuarioPage from './pages/UsuarioPage/UsuarioPage'
import VolutariadoPage from './pages/VolutariadoPage/VolutariadoPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} path="/">
      <Route element={<HomePage />} index />
      <Route element={<DoacaoPage />} path="doacao" />
      <Route element={<VolutariadoPage />} path="voluntariado" />
      <Route element={<MentoriaPage />} path="mentoria" />
      <Route element={<EventosPage />} path="eventos-e-palestras" />
      <Route element={<UsuarioPage />} path="usuario" />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}
