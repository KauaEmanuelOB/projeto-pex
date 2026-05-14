import { useEffect } from 'react'
import produtos from '../../data/produtos.jsx'
import BlocoProdutos from '../../components/BlocoProdutos/BlocoProdutos.jsx'
import Banner from '../../components/Banner/Banner.jsx'
import { banner1a, banner1b, banner1c, banner1d } from '../../assets/banner1'

function Home() {
  useEffect(() => {
    document.title = "Home | Lize Fitwear"
  },[])

  return (
    <main>
      <Banner imagens={[banner1a, banner1b, banner1c, banner1d]}/>
      <BlocoProdutos produtos={produtos} titulo="Novidades"/>
      <BlocoProdutos produtos={produtos} titulo="OUTLET"/>
    </main>
  )
}

export default Home