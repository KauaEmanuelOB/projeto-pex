import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageHeader from '../../components/PageHeader/PageHeader.jsx'
import GridProdutos from '../../components/GridProdutos/GridProdutos.jsx'
import produtos from '../../data/produtos.jsx'
import { Plus, Minus } from 'lucide-react'
import './Produtos.css'

function Produtos() {
  const [searchParams] = useSearchParams()
  const ord = searchParams.get('ord') || "1"

  const [precoMin, setPrecoMin] = useState(0)
  const [precoMax, setPrecoMax] = useState(1000)
  const [ordem, setOrdem] = useState(ord) //1 - Relevância, 2 - preço ascendente, 3 preço decrescente, 4 - data de lançamento
  const [tamanho, setTamanho] = useState("")

  useEffect(() => {
    document.title = "Todos os produtos | Lize Fitwear"
  },[])

  const [produtosFiltrados, setProdutosFiltrados] = useState(produtos)

  const handleFiltro = () => {
    const filtrados = produtos
      .filter(produto => {
        if (produto.preco < precoMin || produto.preco > precoMax) {
          return false
        }
        if (tamanho !== "") {
          if (!produto.tamanhos?.includes(tamanho)) return false
        }
        return true
      })
      .sort((a, b) => {
        if (ordem === "2") return a.preco - b.preco
        if (ordem === "3") return b.preco - a.preco
        return 0
      })
    
    setProdutosFiltrados(filtrados)
  }

  const [filtroAberto, setFiltroAberto] = useState(false)

  return (
    <main className='page-produtos'>

        <PageHeader titulo="Todos os Produtos"/>

      <div className="page-produtos-div">
      
        <section className='opcoes-produtos'>
          <div 
            className={`btn-menu ${filtroAberto ? 'filtro-aberto' : ''}`} 
            onClick={() => {setFiltroAberto(!filtroAberto)}}
          >
            Filtros <Plus className='abrir'/><Minus className='fechar'/>
          </div>
          <div className={`filtros ${filtroAberto ? 'filtro-aberto' : ''}`}>
            
            <div className='ordem'>
              <label htmlFor="ordem">Ordem:</label>
              <select onChange={(e) => setOrdem(e.target.value)} id='ordem'>
                <option value="1">Relevância</option>
                <option value="2">Menor preço</option>
                <option value="3">Maior preço</option>
              </select>
            </div>
            <div>
              <label htmlFor="precoMin">Preço mínimo:</label>
              <input
                id='precoMin'
                type="number"
                onChange={(e) => setPrecoMin(Number(e.target.value))}
                />
            </div>
            <div>
              <label htmlFor="precoMax">Preço máximo:</label>
              <input
                id='precoMax'
                type="number"
                onChange={(e) => setPrecoMax(Number(e.target.value))}
              />
            </div>

            <div>
              <label htmlFor="tamanho">Tamanho:</label>
              <select value={tamanho} onChange={(e) => setTamanho(e.target.value)}>
                <option value="">Todos</option>
                <option value="P">P</option>
                <option value="M">M</option>
                <option value="G">G</option>
              </select>
            </div>

            <button onClick={handleFiltro}>Aplicar Filtros</button>

          </div>
        </section>

        <GridProdutos produtos={produtosFiltrados}/>

      </div>

    </main>
  )
}

export default Produtos