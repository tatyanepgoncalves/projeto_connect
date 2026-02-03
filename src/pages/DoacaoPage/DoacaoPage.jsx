import InstitutoConectaJovem from '../../images/instituto-conecta-jovem..png'
import InstitutoGrandeFamilia from '../../images/instituto-grande-familia.png'
import ProjetoFuturoNaEscola from '../../images/projeto-futuro-escola..png'
import d from './DoacaoPage.module.scss'

const doacaoInfo = [
  {
    image: InstitutoGrandeFamilia,
    title: 'Instituto grande familia',
    decription:
      'Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade.',
  },
  {
    image: ProjetoFuturoNaEscola,
    title: 'Projeto Futuro na Escola',
    decription:
      'Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura.',
  },
  {
    image: InstitutoConectaJovem,
    title: 'Instituto Conecta Jovem',
    decription:
      'Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital e novas oportunidades.',
  },
]

export default function DoacaoPage() {
  return (
    <main className={d.doacaoPage}>
      <div className={d.DoacaoPageContainer}>
        <h1>Doação</h1>

        <section className={d.doacaoGroup}>
          {doacaoInfo.map((doar) => (
            <article className={d.doarItem} key={doar.title}>
              {/** biome-ignore lint/correctness/useImageSize: it isn't necessary */}
              <img alt={doar.decription} loading="lazy" src={doar.image} />

              <div>
                <h2>{doar.title}</h2>
                <p>{doar.decription}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  )
}
