import { useEffect } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader.jsx'
import GridProdutos from '../../components/GridProdutos/GridProdutos.jsx'
import './Produtos.css'

function Produtos() {
  useEffect(() => {
    document.title = "Todos os produtos | Lize Fitwear"
  },[])

  return (
    <main className='page-produtos'>
      <PageHeader titulo="Todos os Produtos"/>
      <div className="page-produtos-div">
        <div className='opcoes-produtos'>
          <div className='ordenar'>
          </div>
          <div className='filtrar'>
        
          </div>
        </div>
        <GridProdutos/>
      </div>
    </main>
  )
}

export default Produtos