import { useEffect } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'

function Sobre() {
  useEffect(() => {
    document.title = "Sobre a Marca | Lize Fitwear"
  },[])

  return (
    <main>
        <PageHeader titulo="Sobre a Marca"/>
    </main>
  )
}

export default Sobre