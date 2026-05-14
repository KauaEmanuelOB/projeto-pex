import { useState, useRef, useEffect } from 'react'
import './BlocoProdutos.css'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import Produto from '../Produto/Produto.jsx'


function BlocoProdutos({ titulo, produtos }) {
  const [posicao,setPosicao] = useState(0)
  const carrossel = useRef(null)
  const larguraProduto = 270
  const posicaoMax = (produtos.length - 5) * larguraProduto
  useEffect(() => {
    if (carrossel.current) {
        carrossel.current.style.transform = `translateX(-${posicao}px)`
    }
  }, [posicao])

  const scroll = (direcao) => {
    let novaPosicao = posicao + larguraProduto * direcao
    setPosicao(novaPosicao)
  }
  

  return (
    <section className='blocoProd'>
      <h3>{titulo}</h3>

      <div className='carrossel'>
        <div className='carrossel-corte'>
          <div
          className="bloco-produtos"
          ref={carrossel}
          >
            {produtos.map((produto) => (
              <Produto key={produto.id} produto={produto} />
            ))}
          </div>
        </div>
        
        <button
          className={`carrossel-btn ant ${posicao === 0 ? 'btn-sumir' : ''}`}
          onClick={() => scroll(-1)}
          disabled={posicao <= 0}>
        <ChevronLeft size={40} />
        </button>

        <button
          className={`carrossel-btn prox ${posicao === posicaoMax ? 'btn-sumir' : ''}`}
          onClick={() => scroll(1)}
          disabled={posicao >= posicaoMax}>
        <ChevronRight size={40} />
        </button>
      </div>

    </section>
  )
}

export default BlocoProdutos