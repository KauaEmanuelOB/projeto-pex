import { Routes, Route } from 'react-router-dom'
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

function App() {
  useEffect(() => {
    document.title = "Lize Fitwear"
  },[])

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/produtos' element={<Produtos/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/cadastro' element={<Cadastro/>}></Route>
        <Route path='/guia-medidas' element={<GuiaMedidas/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/sobre' element={<Sobre/>}></Route>
        <Route path='/carrinho' element={<Carrinho/>}></Route>

        <Route path="*" element={<h1>Página não encontrada! :(</h1>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
