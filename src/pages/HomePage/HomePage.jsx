import { ArrowRight } from 'lucide-react'
import ImageHome from '../../images/imgHome.png'
import h from './HomePage.module.scss'

const stats = [
  { number: '500+', text: 'Empresas Voluntárias' },
  { number: '1.2K+', text: 'Projetos Realizados' },
  { number: '50K+', text: 'Vidas Impactadas' },
]

export default function HomePage() {
  return (
    <main className={h.home}>
      <div className={h.HomePageContainer}>
        <section className={h.HomeLeft}>
          <div className={h.elements}>
            <div className={h.text}>
              <h1>Projetos sociais que transformam</h1>
              <p>
                Conectamos sua empresa com projetos sociais impactantes. Juntos,
                criamos mudanças reais na comunidade.
              </p>
            </div>

            <button className={h.BtnHome} type="button">
              Cadastrar Empresa
              <ArrowRight />
            </button>
          </div>

          <div className={h.statsContainer}>
            {stats.map((item) => (
              <div className={h.stats} key={item.text}>
                <h2>{item.number}</h2>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={h.imageHome}>
          {/** biome-ignore lint/correctness/useImageSize: it isn't necessary */}
          <img
            alt="Imagem da home de mãos com bonecos papel e um globo."
            src={ImageHome}
          />
        </section>
      </div>
    </main>
  )
}
