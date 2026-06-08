import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import Produtos from './pages/Produtos/Produtos.jsx'
import Login from './pages/Login/Login.jsx'
import Cadastro from './pages/Cadastro/Cadastro.jsx'
import GuiaMedidas from './pages/GuiaMedidas/GuiaMedidas.jsx'
import Carrinho from './pages/Carrinho/Carrinho.jsx'
import Sobre from './pages/Sobre/Sobre.jsx'
import PaginaProduto from './pages/PaginaProduto/PaginaProduto.jsx'
import FinalizarCompra from './pages/FinalizarCompra/FinalizarCompra.jsx'
import CompraAprovada from './pages/CompraAprovada/CompraAprovada.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
    })
  }, [pathname])

  return null
}

function App() {
  useEffect(() => {
    document.title = "Lize Fitwear"
  },[])

  return (
    <>
      <ScrollToTop/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/produtos' element={<Produtos/>}></Route>
        <Route path="/produtos/:id/:slug" element={<PaginaProduto/>}/>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/cadastro' element={<Cadastro/>}></Route>
        <Route path='/guia-medidas' element={<GuiaMedidas/>}></Route>
        <Route path='/sobre' element={<Sobre/>}></Route>
        <Route path='/carrinho' element={<Carrinho/>}></Route>
        <Route path='/finalizar-compra' element={<FinalizarCompra/>}></Route>
        <Route path='/compra-aprovada' element={<CompraAprovada/>}></Route>

        <Route path="*" element={<main><h1>Página não encontrada! :(</h1></main>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
