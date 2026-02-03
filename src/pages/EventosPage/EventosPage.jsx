import CarreiraPrimeiroEmprego from '../../images/carreira-primeiro-emprego.png'
import EmpoderamentoJovem from '../../images/empoderando-jovens-futuro.png'
import TecnoologiaTransforma from '../../images/tecnologia-que-transforma.png'
import e from './EventosPage.module.scss'

const eventosInfo = [
  {
    image: EmpoderamentoJovem,
    title: 'Empoderando Jovens para o Futuro',
    textOne:
      'Atividade: Palestra motivacional sobre liderança jovem e transformação social.',
    textTwo:
      'Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades.',
  },
  {
    image: TecnoologiaTransforma,
    title: 'Tecnologia que Transforma',
    textOne:
      'Atividade: Workshop de introdução à programação e inovação digital.',
    textTwo:
      'Impacto: Preparar jovens para o mercado de trabalho através da tecnologia.',
  },
  {
    image: CarreiraPrimeiroEmprego,
    title: 'Carreira e Primeiro Emprego',
    textOne:
      'Atividade: Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado.',
    textTwo: 'Impacto: Ajudar jovens a conquistar oportunidades de trabalho.',
  },
]

export default function EventosPage() {
  return (
    <section className={e.events}>
      <div className={e.eventsContainer}>
        <h1>Eventos & Palestras</h1>

        <section className={e.eventsGroup}>
          {eventosInfo.map((item) => (
            <article className={e.eventsItem}>
              <img alt="" src={item.image} />

              <div className={e.id}>
                <h2>{item.title}</h2>
                <div className={e.paragraph}>
                  <p>{item.textOne}</p>
                  <p>{item.textTwo}</p>
                </div>
              </div>
              <button className={e.btnEvent} type="button">
                Quero participar
              </button>
            </article>
          ))}
        </section>
      </div>
    </section>
  )
}
