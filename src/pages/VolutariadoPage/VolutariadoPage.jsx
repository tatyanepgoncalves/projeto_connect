import AulasTech from '../../images/aulas-tecnologia.png'
import EsporteInclusao from '../../images/esporte-inclusao.png'
import MultiraoReciclagem from '../../images/mutirao-reciclagem.png'
import v from './VolutariadoPage.module.scss'

const volutariadoInfo = [
  {
    image: MultiraoReciclagem,
    title: 'Mutirão de reciclagem',
    description:
      'Coletar materiais recicláveis e orientar sobre descarte consciente.',
  },
  {
    image: AulasTech,
    title: 'Aulas de Tecnologia',
    description:
      'Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital.',
  },
  {
    image: EsporteInclusao,
    title: 'Esporte e Inclusão',
    description:
      'Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens.',
  },
]

export default function VolutariadoPage() {
  return (
    <section className={v.voluntariadoPage}>
      <div className={v.voluntariadoPageContainer}>
        <h1>Voluntariado</h1>

        <section className={v.voluntariadosGroup}>
          {volutariadoInfo.map((item) => (
            <article className={v.voluntariadoItem} key={item.title}>
              <img alt={item.title} loading="lazy" src={item.image} />

              <div className={v.id}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>

              <button type='button' className={v.btnVoluntario}>Quero participar</button>
            </article>
          ))}
        </section>
      </div>
    </section>
  )
}
