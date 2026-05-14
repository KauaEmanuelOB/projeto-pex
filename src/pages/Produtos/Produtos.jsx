import { useEffect } from 'react'
import produtos from '../../data/produtos.jsx'
import Produto from '../../components/Produto/Produto.jsx'
import PageHeader from '../../components/PageHeader/PageHeader.jsx'
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
        <div className='grid-produtos'>
          {produtos.map((produto) => (
              <Produto key={produto.id} produto={produto} />
          ))} 
          {produtos.map((produto) => (
              <Produto key={produto.id} produto={produto} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Produtos