import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Minus, Mail, } from 'lucide-react'
import { SiInstagram, SiWhatsapp } from '@icons-pack/react-simple-icons'
import { meioPag1, meioPag2, meioPag3, meioPag4, meioPag5, meioPag6, meioPag7, meioPag8 } from '../../assets/meiosPagamento'
import { meioEnvio1, meioEnvio2 } from '../../assets/meiosEnvio'
import './Footer.css'

function Footer() {
  const [instituAberto, setInstituAberto] = useState(false)
  const [politicasAberto, setPoliticasAberto] = useState(false)
  
  return (
    <footer>
      
        <div className="grid-footer">

          <section>
            <p className='titulo'>Institucional: </p>
            <div 
              className={`btn-menu titulo ${instituAberto ? 'btn-aberto' : ''}`} 
              onClick={() => setInstituAberto(!instituAberto)}
            >
              Institucional 
              <Plus className='abrir'/><Minus className='fechar'/></div>
            <div className={`itens-menu ${instituAberto ? 'institu-aberto' : ''}`}>
              <Link className='item-menu' to='/' >Home</Link>
              <Link className='item-menu' to='/login' >Minha conta</Link>
              <Link className='item-menu' to='/produtos?ord=1' >Produtos</Link>
              <Link className='item-menu' to='/produtos?ord=1' >Novidades</Link>
              <Link className='item-menu' to='/produtos?ord=2' >OUTLET</Link>
              <Link className='item-menu' to='/guia-medidas' >Guia de Medidas</Link>
              <Link className='item-menu' to='/sobre' >Sobre a Marca</Link>
            </div>
          </section>
          
          <section>
            <p className='titulo'>Políticas da Empresa: </p>
            <div 
              className={`btn-menu titulo ${politicasAberto ? 'btn-aberto' : ''}`} 
              onClick={() => setPoliticasAberto(!politicasAberto)}
            >
              Políticas da Empresa 
              <Plus className='abrir'/><Minus className='fechar'/></div>
            <div className={`itens-menu ${politicasAberto ? 'polit-aberto' : ''}`}>
              <Link className='item-menu' to='' >Política de Privacidade</Link>
              <Link className='item-menu' to='' >Troca e Devoluções</Link>
              <Link className='item-menu' to='' >A Lize é confiável?</Link>
              <Link className='item-menu' to='' >Perguntas Frequentes</Link>
            </div>
          </section>

          <section>
            <div className='titulo'>Canais Oficiais:</div>
            <div className='canal'><SiWhatsapp className='whatsapp'/>(47) 99787-3011</div>
            <div className='canal'><Mail className='email'/>lizefitwear@hotmail.com</div>
            <div className='canal'><SiInstagram className='instagram'/>@lizefitwear</div>
          </section>

          <section>
            <div>
              <div className='titulo'>Formas de pagamento:</div>
              <div className='itens-formas'>
                <img src={meioPag1} alt="" />
                <img src={meioPag2} alt="" />
                <img src={meioPag3} alt="" />
                <img src={meioPag4} alt="" />
                <img src={meioPag5} alt="" />
                <img src={meioPag6} alt="" />
                <img src={meioPag7} alt="" />
                <img src={meioPag8} alt="" />
              </div>
            </div>
            <div>
              <div className='titulo'>Formas de Envio:</div>
              <div className='itens-formas'>
                <img src={meioEnvio1} alt="" />
                <img src={meioEnvio2} alt="" />
              </div>
            </div>
          </section>

        </div>

    </footer>
  )
}

export default Footer