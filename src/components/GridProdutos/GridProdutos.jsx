import Produto from '../../components/Produto/Produto.jsx'
import './GridProdutos.css'

function GridProdutos({ produtos }) {

  return (
    <div className='grid-produtos'>
      {produtos.map((produto) => (
          <Produto key={produto.id} produto={produto} />
      ))} 
    </div>
  )
}

export default GridProdutos