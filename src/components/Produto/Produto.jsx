import { Link } from 'react-router-dom'
import Tamanhos from '../Tamanhos/Tamanhos'
import './Produto.css'

function Produto({ produto }) {
  /* const precoPix = (preco) => preco * 0.95 {formatarMoeda(precoPix(produto.preco))} */
  const parcela = (preco, vezes) => preco/vezes
  const formatarMoeda = (valor) => `R$ ${valor.toFixed(2)}`

  return (
    <Link to={`/produtos/${produto.id}/${produto.slug}`}>
      <article className="produto">
          <div className="produtoImg"><img src={produto.img} alt={produto.imgAlt} /></div>
          <section className="produtoInfo">
              <p className="titulo">{produto.nome}</p>
              <Tamanhos tamanhos={produto.tamanhos}/>
              <p className="preco">{formatarMoeda(produto.preco)}</p>
              <p className="precoPix">5% OFF no PIX</p>
              <p className="precoParcelado">6x {formatarMoeda(parcela(produto.preco,6))} sem juros</p>
          </section>
      </article>
    </Link>
  )
}

export default Produto