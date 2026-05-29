import { useState } from 'react'
import { useCarrinho } from '../../../hooks/useCarrinho.jsx'
import { ShoppingCart, Truck, Plus, Minus } from 'lucide-react'
import './OpcoesProduto.css'

function OpcoesProduto( {produto} ) {
  const precoPix = (preco) => preco * 0.95
  const parcela = (preco, vezes) => preco/vezes
  const formatarMoeda = (valor) => `R$ ${valor.toFixed(2)}`

  const [tamanho, setTamanho] = useState(produto.tamanhos[0])
  const [quantidade, setQuantidade] = useState(1)

  const handleQtd = (valor) => {
    const novaQuantidade = quantidade + valor
    if (novaQuantidade >= 1) {
      setQuantidade(novaQuantidade)
    }
  }

  const { addCarrinho } = useCarrinho()

  return (
    <section className='opcoes'>

      <div className='comprar'>
        <h2>{produto.nome}</h2>
        <div className="precos">
          <h1>{formatarMoeda(produto.preco)}</h1>
          <h4><span className="preco">{formatarMoeda(precoPix(produto.preco))}</span> no Pix</h4>
          <h4>Ou até 6x de <span className="preco">{formatarMoeda(parcela(produto.preco,6))}</span> sem juros</h4>
        </div>
        
        
        <div>
          <div className="tamanhos-titulo">
            <p>Tamanho: </p><span>{tamanho}</span>
          </div>
          <div className="op-tamanho">
            {produto.tamanhos.map((tamanhoItem,index) => (
              <div
                key={index}
                className={`tamanho-item ${tamanhoItem === tamanho ? 'ativo' : ''}`}
                onClick={() => setTamanho(tamanhoItem)}
              >
                {tamanhoItem}
              </div>
            ))}
          </div>
        </div>

        <div>
          <p>Quantidade: </p>
          <div className="quantidade">
            <button onClick={() => handleQtd(-1)} disabled={quantidade === 1}>
            <Minus/></button>
            {quantidade}
            <button onClick={() => handleQtd(1)}>
            <Plus/></button>
          </div>
        </div>

        <div className='botoes'>
          <button className='btn-comprar'>Comprar agora</button>
          <button className='add-carrinho' onClick={() => addCarrinho(produto,quantidade,tamanho)}><ShoppingCart/>Adicionar ao carrinho</button>
        </div>

      </div>

      <div className="frete">
        <label htmlFor=""><Truck/> Cálculo de frete</label>
        <input 
          type="text" 
          placeholder='Digite seu cep'
          
        />
        <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target='blank'>Não lembro meu cep</a>
      </div>
    </section>
  )
}

export default OpcoesProduto