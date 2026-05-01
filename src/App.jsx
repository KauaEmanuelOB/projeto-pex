import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home.jsx'
import Produtos from './pages/Produtos.jsx'

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

        <Route path="*" element={<h1>Página não encontrada! :c</h1>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
