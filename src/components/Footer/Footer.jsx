import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Mail, } from 'lucide-react'
import { SiInstagram, SiWhatsapp } from '@icons-pack/react-simple-icons'
import './Footer.css'

function Footer() {
  const [instituAberto, setInstituAberto] = useState(false)
  const [politicasAberto, setPoliticasAberto] = useState(false)

  return (
    <div>
      
      <footer>
        <section>
          <p className='titulo'>Institucional: </p>
          <div className='btn-menu titulo' onClick={() => setInstituAberto(!instituAberto)}>Institucional <Plus/></div>
          <div className={`itens-menu ${instituAberto ? 'menu-aberto' : ''}`}>
            <Link className='item-menu' to='/' >Home</Link>
            <Link className='item-menu' to='/login' >Minha conta</Link>
            <Link className='item-menu' to='/produtos' >Produtos</Link>
            <Link className='item-menu' to='/produtos' >Novidades</Link>
            <Link className='item-menu' to='/produtos' >OUTLET</Link>
            <Link className='item-menu' to='/guia-medidas' >Guia de Medidas</Link>
            <Link className='item-menu' to='/sobre' >Sobre a Marca</Link>
          </div>
        </section>
        <section>
          <p className='titulo'>Políticas da Empresa: </p>
          <div className='btn-menu titulo' onClick={() => setPoliticasAberto(!politicasAberto)}>Políticas da Empresa <Plus/></div>
          <div className={`itens-menu ${politicasAberto ? 'menu-aberto' : ''}`}>
            <Link className='item-menu' to='' >Política de Privacidade</Link>
            <Link className='item-menu' to='' >Troca e Devoluções</Link>
            <Link className='item-menu' to='' >A Lize é confiável?</Link>
            <Link className='item-menu' to='' >Perguntas Frequentes</Link>
          </div>
        </section>
        <section>
          <div className='titulo'>Canais Oficiais:</div>
          <div className='canal'><SiWhatsapp/>(47) 99787-3011</div>
          <div className='canal'><Mail/>lizefitwear@hotmail.com</div>
          <div className='canal'><SiInstagram/>@lizefitwear</div>
        </section>
        <section>
          <div>
            <div className='titulo'>Meios de Pagamento:</div>
            <div className='itens-meios'>
              <div/>
              <div/>
              <div/>
              <div/>
              <div/>
              <div/>
              <div/>
            </div>
          </div>
          <div>
            <div className='titulo'>Meios de Envio:</div>
            <div className='itens-meios'>
              <div/>
              <div/>
            </div>
          </div>
        </section>
      </footer>
    </div>
  )
}

export default Footer