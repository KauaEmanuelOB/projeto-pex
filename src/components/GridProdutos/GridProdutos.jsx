import Produto from '../../components/Produto/Produto.jsx'
import produtos from '../../data/produtos.jsx'
import './GridProdutos.css'

function GridProdutos() {

  return (
    <div className='grid-produtos'>
      {produtos.map((produto) => (
          <Produto key={produto.id} produto={produto} />
      ))} 
      {produtos.map((produto) => (
          <Produto key={produto.id} produto={produto} />
      ))}
    </div>
  )
}

export default GridProdutos