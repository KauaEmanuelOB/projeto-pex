import { useEffect } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader.jsx'
import tabelaMedidas from '../../assets/medidas/tabelaMedidas.png'
import tabelaMedidasA from '../../assets/medidas/tabelaMedidasa.png'
import tabelaMedidasB from '../../assets/medidas/tabelaMedidasb.png'
import './GuiaMedidas.css'

function GuiaMedidas() {
  useEffect(() => {
    document.title = "Guia de Medidas | Lize Fitwear"
  },[])

  return (
    <main>
      <PageHeader titulo="Guia de medidas"/>

      <div className="desktop">
        <img src={tabelaMedidas} alt='tabela de medidas' />
      </div>
      <div className="mobile">
        <img src={tabelaMedidasB} alt="" />
        <img src={tabelaMedidasA} alt="" />
      </div>
    </main>
  )
}

export default GuiaMedidas