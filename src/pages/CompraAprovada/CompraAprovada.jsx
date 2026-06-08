import { useEffect } from 'react'
import BlocoProdutos from '../../components/BlocoProdutos/BlocoProdutos.jsx'
import produtos from '../../data/produtos.jsx'
import logo from '../../assets/logo.webp'
import './CompraAprovada.css'

function CompraAprovada() {
   useEffect(() => {
      document.title = "Compra aprovada! | Lize Fitwear"
   },[])

  return (
      <>
         <main className='page-aprovada'>
            <section className='pagamento'>
               <h3>Compra Aprovada!</h3>
               <p>A entrega já está sendo preparada, as atualizações podem ser acompanhadas no email ou em seu perfil.</p>
               <img src={logo} alt="" />
            </section>
         </main>
         <aside className='page-aprovada'>
          <BlocoProdutos produtos={produtos} titulo="Recomendações"/>
         </aside>
      </>
   )
}

export default CompraAprovada