import { useCarrinho } from '../../hooks/useCarrinho.jsx'
import BlocoProdutos from '../../components/BlocoProdutos/BlocoProdutos.jsx'
import produtos from '../../data/produtos.jsx'
import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { useEffect } from 'react'
import './Carrinho.css'

function Carrinho() {
  useEffect(() => {
    document.title = "Carrinho | Lize Fitwear"
  },[])
  
  const { carrinho, precoTotal, totalItens, removerCarrinho, attQuantidade } = useCarrinho()

  const formatarMoeda = (valor) => `R$ ${valor.toFixed(2)}`

  return (
    <>
      <main className='page-carrinho'>
        <section className='itens-carrinho'>
          <div className='topo'>
            <h4>Carrinho:</h4>
          </div>
          <div className="itens-carrinho-in">
            {carrinho.map((item) => (
              <article key={item.id}>
                <Link to={`/produtos/${item.id}/${item.slug}`}><img src={item.imagem} alt={item.nome}/></Link>
                <div className='sec2'>
                  <Link to={`/produtos/${item.id}/${item.slug}`}>{item.nome}</Link>
                  <div>Tamanho: <strong>{item.tamanho}</strong></div>
                  <div className="quantidade">
                    <button onClick={() => attQuantidade(item.id, item.tamanho, item.quantidade -1)}>
                    <Minus size={19}/></button>
                    {item.quantidade}
                    <button onClick={() => attQuantidade(item.id, item.tamanho, item.quantidade +1)}>
                    <Plus size={19}/></button>
                  </div>
                </div>
                <div className="sec3">
                  R$ {item.preco * item.quantidade}
                  <Trash2 className='lixo' onClick={() => removerCarrinho(item.id, item.tamanho)} />
                </div>
            
              </article>
            ))}
            {totalItens === 0 &&
              <article>
                Não há nenhum item no carrinho no momento. Procure por produtos para adicionar
              </article>
            
            }
          </div>
        </section>

        <section className='comprar'>
          <div className='topo'>
            <h4>Resumo da compra:</h4>
          </div>
          <div className='comprar-in'>
            <div className="precos">
              <div>
                <div><p>Produtos({totalItens}):</p> <p>{formatarMoeda(precoTotal)}</p></div>
                <div><p>Frete:</p> <p>{formatarMoeda(0)}</p></div>
              </div>
              <div className='total'><p>Total:</p> <p><strong>{formatarMoeda(precoTotal)}</strong></p></div>
            </div>
            <Link to='/finalizar-compra'><button>Finalizar compra</button></Link>
          </div>

        </section>
      </main>
      <aside className='page-carrinho'>
          <BlocoProdutos produtos={produtos} titulo="Recomendações"/>
      </aside>
    </>
  )
}

export default Carrinho