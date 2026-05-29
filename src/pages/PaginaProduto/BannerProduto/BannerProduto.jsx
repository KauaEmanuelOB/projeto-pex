import { useState, useRef, useEffect } from 'react'
import './BannerProduto.css'

function BannerProduto({ imagens }) {
  const [posicao, setPosicao] = useState(0)
  const carrossel = useRef(null)

  useEffect(() => {

    if (carrossel.current) {
        carrossel.current.style.transform = `translateX(-${posicao * 100}%)`
    }
  }, [posicao])

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

    </div>
  )
}

export default BannerProduto