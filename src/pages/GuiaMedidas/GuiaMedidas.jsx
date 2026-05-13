import { useEffect } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader.jsx'

function GuiaMedidas() {
  useEffect(() => {
    document.title = "Guia de Medidas"
  },[])

  return (
    <main>
      <PageHeader titulo="Guia de medidas"/>
    </main>
  )
}

export default GuiaMedidas