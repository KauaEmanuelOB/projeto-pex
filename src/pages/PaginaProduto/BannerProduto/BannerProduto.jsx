import { useState, useRef, useEffect } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import './BannerProduto.css'

function BannerProduto({ imagens }) {
  const larguraBanner = imagens.length
  const [posicao, setPosicao] = useState(0)
  const carrossel = useRef(null)

  useEffect(() => {

    if (carrossel.current) {
        carrossel.current.style.transform = `translateX(-${posicao * 100}%)`
    }
  }, [posicao])

  const scroll = (direcao) => {
    let novaPosicao = posicao + direcao
    if (novaPosicao < 0) {
      novaPosicao = larguraBanner - 1
    }
    if (novaPosicao >= larguraBanner) {
      novaPosicao = 0
    }
    setPosicao(novaPosicao)
  }

  return (
    <div className='banner-produto'>

      <div className="carrossel-corte">
        <div
        className='carrossel'
        ref={carrossel}
        >
          {imagens.map((imagem,index) => (
          <img key={index} src={imagem} alt=""/>
          ))}
        </div>
      </div>
      
      <div className="indicadores">
        {imagens.map((img, index) => (
          <img 
            src={img}
            alt=""
            key={index}
            className={posicao === index ? 'ativa' : ''}
            onClick={() => setPosicao(index)}
          />
        ))}
      </div>

      <button
        className={'anterior'}
        onClick={() => scroll(-1)}
      >
        <ChevronLeft size={35} />
      </button>

      <button
        className={'prox'}
        onClick={() => scroll(1)}
      >
        <ChevronRight size={35} />
      </button>

    </div>
  )
}

export default BannerProduto