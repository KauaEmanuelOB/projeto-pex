import { useEffect } from 'react'
import produtos from '../../data/produtos.jsx'
import BlocoProdutos from '../../components/BlocoProdutos/BlocoProdutos.jsx'
import Banner from '../../components/Banner/Banner.jsx'
import { banner1a, banner1b, banner1c, banner1d } from '../../assets/banner1'
import { banner2a, banner2b, banner2c, banner2d, banner2e } from '../../assets/banner2'

function Home() {
  useEffect(() => {
    document.title = "Home | Lize Fitwear"
  },[])

  return (
    <main>
      <div className='desktop'>
        <Banner imagens={[banner1a, banner1b, banner1c, banner1d]}/>
      </div>
      <div className='mobile'>
        <Banner imagens={[banner2a, banner2b, banner2c, banner2d, banner2e]}/>
      </div>
      <BlocoProdutos produtos={produtos} titulo="Novidades"/>
      <BlocoProdutos produtos={produtos} titulo="OUTLET"/>
    </main>
  )
}

export default Home