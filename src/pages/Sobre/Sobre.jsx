import { useEffect } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'

function Sobre() {
  useEffect(() => {
    document.title = "Sobre"
  },[])

  return (
    <main>
        <PageHeader titulo="Sobre a Marca"/>
    </main>
  )
}

export default Sobre