import { useState, useRef, useEffect } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import './Banner.css'

function Banner({ imagens }) {
  const larguraBanner = imagens.length
  const [posicao,setPosicao] = useState(0)
  const carrossel = useRef(null)

  useEffect(() => {
    if (carrossel.current) {
        carrossel.current.style.transform = `translateX(-${posicao * 100}%)`
    }
  }, [posicao])

  const scroll = (direcao) => {
    let novaPosicao = posicao + direcao
    if (novaPosicao < 0) novaPosicao = larguraBanner - 1
    if (novaPosicao >= larguraBanner) novaPosicao = 0
    setPosicao(novaPosicao)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setPosicao((prev) => {
        let nova = prev + 1
        if (nova >= imagens.length) nova = 0
        return nova
      })
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='banner'>

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
      <div>
        <div className="indicadores">
          {imagens.map((_, index) => (
            <span
              key={index}
              className={posicao === index ? 'ativa' : ''}
              onClick={() => setPosicao(index)}
            />
          ))}
        </div>
      </div>

      <button
        className={'anterior'}
        onClick={() => scroll(-1)}
      >
        <ChevronLeft size={40} />
      </button>

      <button
        className={'prox'}
        onClick={() => scroll(1)}
      >
        <ChevronRight size={40} />
      </button>

    </div>
  )
}

export default Banner