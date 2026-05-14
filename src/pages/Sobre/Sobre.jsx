import { useEffect } from 'react'
import './Sobre.css'

function Sobre() {
  useEffect(() => {
    document.title = 'Sobre a Marca | Lize Fitwear'
  }, [])

  return (
    <main className="sobre">

      <section className="sobre__hero">
        <div className="sobre__overlay">
          <h1>Sobre a Marca</h1>
          <p>Looks que acompanham sua vida real</p>
        </div>
      </section>

      <section className="sobre__intro">
        <p>
          A gente sabe que a rotina não para. Tem treino, trabalho,
          compromissos, tarefas de casa, encontros e correria.
          A roupa precisa acompanhar tudo isso. Foi pensando nisso
          que nasceu a <strong>Lize Fitwear</strong>, criada para
          mulheres reais que querem conforto, segurança e confiança
          no dia a dia.
        </p>
      </section>

      <section className="sobre__beneficios">
        <h2>Acreditamos em conforto que faz parte da rotina</h2>

        <div className="sobre__cards">
          <div className="sobre__card">
            Do treino ao mercado
          </div>

          <div className="sobre__card">
            Do café às tarefas
          </div>

          <div className="sobre__card">
            Sem trocar de roupa
          </div>

          <div className="sobre__card">
            Movimento com liberdade
          </div>
        </div>
      </section>

      {/* LISTA */}
      <section className="sobre__qualidades">
        <h2>Peças que resolvem problemas de verdade</h2>

        <ul>
          <li>Tecidos confortáveis</li>
          <li>Modelagem que veste bem</li>
          <li>Não ficam transparentes</li>
          <li>Qualidade que você sente no corpo</li>
        </ul>
      </section>
    </main>
  )
}

export default Sobre