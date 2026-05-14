import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.webp'
import { CircleUser, Search, ShoppingCart, Menu, Home, User, Shirt, Tag, BadgePercent, Ruler, Info } from 'lucide-react'
import './Header.css'

function Header() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [pesquisaAberta, setPesquisaAberta] = useState(false)
  const navRef = useRef(null)
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const clicarFora = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuAberto(false)
      }
    }
    document.addEventListener('click', clicarFora)
    return () => document.removeEventListener('click', clicarFora)
  }, [])
  
  const handleScroll = () => {
    if (window.scrollY > 40)
      setSticky(true)
    else
      setSticky(false)
  }
  useEffect(() => {
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])
  
  return (
    <header className={sticky ? 'sticky-on' : ''}>
        <div className='header-sec'>
          <div className="menu-logo" size={25}>
            <div
              className="menu" ref={navRef}
              onClick={() => setMenuAberto(!menuAberto)}
            >
              <Menu/>
            </div>
            <Link to='/'><img src={logo} alt="Logo LizeFitwear"/></Link>
          </div>
          <div className='header-restante'>
            <Search className='lupa botao-pesquisa' size={25} onClick={() => setPesquisaAberta(!pesquisaAberta)}/>
            <div className={`pesquisa pesquisa-desktop`}>
              <input
                type="text"
                name='pesquisa'
                placeholder="Pesquise por produtos"
              />
              <Search className='lupa' size={30}/>
            </div>
            <Link to='/login'><CircleUser size={30}/></Link>
            <Link to='/' ><ShoppingCart size={30}/></Link>
          </div>
        </div>
    
        <nav
          className={menuAberto ? 'menu-aberto' : 'menu-fechado'}
    
          onClick={() => setMenuAberto(false)}
        >
          <Link to='/' className='nav-item'><Home size={20}/>Home</Link>
          <Link to='/login' className='nav-item'><User size={20}/>Minha conta</Link>
          <Link to='/produtos' className='nav-item'><Shirt size={20}/>Produtos</Link>
          <Link to='/produtos' className='nav-item'><Tag size={20}/>Novidades</Link>
          <Link to='/produtos' className='nav-item'><BadgePercent size={20}/>OUTLET</Link>
          <Link to='/guia-medidas' className='nav-item'><Ruler size={20}/>Guia de Medidas</Link>
          <Link to='/sobre' className='nav-item'><Info size={20}/>Sobre a Marca</Link>
        </nav>
        
        {pesquisaAberta && (
        <div onBlur={() => setPesquisaAberta(false)} className={`pesquisa pesquisa-mobile ${pesquisaAberta ? 'pesquisa-aberta' : ''}`}>
          <input
            type="text"
            name='pesquisa'
            placeholder="Pesquise por produtos"
            autoFocus={pesquisaAberta}
          />
          <Search className='lupa' size={25}/>
        </div>
        )}
    </header>
  )
}

export default Header