import { useEffect } from 'react'
import produtos from '../data/produtos.jsx'
import BlocoProdutos from '../components/BlocoProdutos/BlocoProdutos.jsx'
import logo from '../assets/logo.webp'

function Home() {
  useEffect(() => {
    document.title = "Home"
  },[])

  return (
    <main>
      <BlocoProdutos produtos={produtos} titulo="Novidades" imagem={logo}/>
      <BlocoProdutos produtos={produtos} titulo="OUTLET" imagem={logo}/>
    </main>
  )
}

export default Home