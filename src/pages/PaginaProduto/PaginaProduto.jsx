import { useParams } from 'react-router-dom'
import BannerProduto from './BannerProduto/BannerProduto.jsx'
import BlocoProdutos from '../../components/BlocoProdutos/BlocoProdutos.jsx'
import OpcoesProduto from './OpcoesProduto/OpcoesProduto.jsx'
import tabelaMedidasB from '../../assets/medidas/tabelaMedidasb.png'
import produtos from '../../data/produtos.jsx'
import './PaginaProduto.css'

function PaginaProduto() {
  const { id } = useParams()
  
  const produto = produtos.find(p => p.id === Number(id))

  if (!produto) {
    return <h2>Produto não encontrado! :(</h2>
  }
  return (
    <>
      <main className='page-produto'>

        <section className='detalhes'>

          <BannerProduto imagens={produto.banner}/>

          <div className="mobile">
            <OpcoesProduto produto={produto}/>
          </div>

          <div className="info">

            <ul>
              <h4>ORIENTAÇÕES IMPORTANTES</h4>
              <li>Lave á mão, separadamente e com água fria.</li>
              <li>Use sabão neutro e evite deixar de molho.</li>
              <li>Seque á sombra, para preservar o tecido.</li>
            </ul>

            <img src={tabelaMedidasB} alt="" />
          </div>

        </section>

        <div className="desktop">
          <OpcoesProduto produto={produto}/>
        </div>
      
      </main>

      <aside className='page-produto'>
        <BlocoProdutos produtos={produtos} titulo="Para combinar com este look"/>
      </aside>
    </>
  )
}

export default PaginaProduto