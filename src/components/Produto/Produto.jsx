import Tamanhos from '../Tamanhos/Tamanhos'
import { Plus } from 'lucide-react'
import './Produto.css'

function Produto({produto}) {
  /* const precoPix = (preco) => preco * 0.95 {formatarMoeda(precoPix(produto.preco))} */
  const parcela = (preco, vezes) => preco/vezes
  const formatarMoeda = (valor) => `R$ ${valor.toFixed(2)}`

  return (
    <article className="produto">
        <img src={produto.img} alt={produto.imgAlt} />
        <section className="produtoInfo">
            <p className="titulo">{produto.nome}</p>

            <Tamanhos tamanhos={produto.tamanhos}/>

            <p className="preco">{formatarMoeda(produto.preco)}</p>

            <p className="precoPix">5% OFF no PIX</p>

            <p className="precoParcelado">6x {formatarMoeda(parcela(produto.preco,6))} sem juros</p>

            <button>Carrinho<Plus/></button>

        </section>
    </article>
  )
}

export default Produto