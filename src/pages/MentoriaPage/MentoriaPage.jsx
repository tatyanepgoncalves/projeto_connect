import Acompanhamento from '../../images/acompanhamento.png'
import CompartilheExperiencia from '../../images/compartilhe-experiencia.png'
import MentoriaCarreira from '../../images/mentoria-carreira-emprego.png'
import m from './MentoriaPage.module.scss'

const mentoriaInfo = [
  {
    image: MentoriaCarreira,
    title: 'Mentoria de Carreira e Emprego',
    description:
      'Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho.',
  },
  {
    image: CompartilheExperiencia,
    title: 'Compartilhe Experiência',
    description: 'Oriente jovens e profissionais iniciantes em sua área.',
  },
  {
    image: Acompanhamento,
    title: 'Acompanhamento',
    description:
      'Participe como guia em jornadas de aprendizado e desenvolvimento.',
  },
]

export default function MentoriaPage() {
  return (
    <section className={m.mentoriaPage}>
      <div className={m.mentoriaPageContainer}>
        <h1>Mentoria</h1>

        <section className={m.mentorias}>
          {mentoriaInfo.map((item) => (
            <article className={m.mentoriaItem} key={item.title}>
              <img alt="" src={item.image} />

              <div className={m.id}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>

              <button className={m.btnMentoria} type="button">
                Quero participar
              </button>
            </article>
          ))}
        </section>
      </div>
    </section>
  )
}
