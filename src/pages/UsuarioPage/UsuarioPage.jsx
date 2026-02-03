import { Calendar, Mail, MapPin } from 'lucide-react'
import u from './UsuarioPage.module.scss'

export default function UsuarioPage() {
  return (
    <section className={u.usuario}>
      <div className={u.usuarioContainer}>
        <img
          alt="Imagem de usuário de Tatyane Gonçalves"
          src="https://avatars.githubusercontent.com/u/158174190?v=4"
        />  

        <section className={u.textElements}>
            <div className={u.id}>
              <h2>Tatyane Gonçalves</h2>
              <p>Voluntário Ativo</p>
            </div>
            <p className={u.bio}>
              Estudante de Sistemas de Informação, motivada a aprender e evoluir.
              Acredito na tecnologia como ferramenta prática para resolver
              problemas reais e gerar impacto positivo.
            </p>

            <div className={u.info}>
              <div>
                <MapPin size={14} />
                <p>Berilo, MG</p>
              </div>

              <div>
                <Mail size={14} />
                <p>tatyanegoncalves023@gmail.com</p>
              </div>

              <div>
                <Calendar size={14} />
                <p>Membro desde Janeiro 2022</p>
              </div>
            </div>
          
          <div className={u.badges}>
            <div className={u.badge}>Educação</div>
            <div className={u.badge}>Tecnologia</div>
            <div className={u.badge}>Design</div>
            <div className={u.badge}>Idioma</div>
          </div>
        </section>





     
      </div>
  </section>
  )
}
