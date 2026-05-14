import { useEffect } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader.jsx'
import tabelaMedidas from '../../assets/medidas/tabelaMedidas.png'

function GuiaMedidas() {
  useEffect(() => {
    document.title = "Guia de Medidas | Lize Fitwear"
  },[])

  return (
    <main>
      <PageHeader titulo="Guia de medidas"/>

      <img src={tabelaMedidas} alt='tabela de medidas' />
    </main>
  )
}

export default GuiaMedidas