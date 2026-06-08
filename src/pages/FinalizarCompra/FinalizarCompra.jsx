import { useEffect } from 'react'
import { useCarrinho } from '../../hooks/useCarrinho.jsx'
import { Plus, CreditCard, BanknoteArrowDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import './FinalizarCompra.css'

function GuiaMedidas() {
   useEffect(() => {
      document.title = "Finalizar compra | Lize Fitwear"
   },[])

   const {precoTotal, totalItens} = useCarrinho()

   const formatarMoeda = (valor) => `R$ ${valor.toFixed(2)}`

  return (
      <main className='page-finalizar'>
         <section className='pagamento'>
            <div className='topo'>
               <h4>Método de pagamento:</h4>
            </div>
            <div className="pagamento-in">
               <article>
                  <h4>Cartão</h4>
                  <div><div><CreditCard/>Adicione um cartão</div><Plus/></div>
               </article>
               <article>
                  <h4>PIX</h4>
                  <div><div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACr0lEQVR4nN2au27UQBSGv4KtjCUQ7C5UUZZLBQWQGsFjkJLLm3Cpcum4PssGSJCAkkSiIEIEVkAJ6dgUi070G42sXWyPx47XvzQr2+OZOd96PJ5zZqAaXQAeAe+BH0p2/FB5jVcHWAcOgMmMZHlrureROg4MZewf4DFwHegq2fETYKx7NoCYBkJsysBvwJX/3HsNGOnerSbBRPp3zbCvwLkcZRaAzyrzpgkwkQdE42CiEhCNgYkCQBw5TBQQ4shgogogaoeJKoSoDSaqASJRZTB1QlQGEztfbDftA6+Bu8Cxso2ojntqa39Ke6VmALMgpjVicylfdfWv52knLgOxByym8k8Ay8qze7aBngdET2Wtji/ALdXtauC0UwgmC8JVH9jxhHEhtlXXLBWG8XmxrWt8UJmPwFmPMmdCDgBRidGpiGE+ELlhOg7Enh5lUfVydLN0d/J5rwZON9tIe5rrjlPkAzHLUHc06waASDSQrVbXanLxovxoc0+vUl5pmMtKoSBcT3OsdB5FOybysUPJhXFT+imV1TPV+wCFaSYKDoT24+2x7wKfdGzXQuqmbH9nJz91cor5U0+2W9zs8MdOTjN/6sv271V3rTV1rV0dV9W13qIwpp08ncOX/YXqvY+GrgMNYzakhR5+L1U0/C45dh8Ov+ixz9sHcZT+IKLP/LANU5Syk0bXwKKTxjyz5VpmwEUgysAsFPXj3ch6Vjery7Fa9PUSs2BOVuTqLqvuIBBFgw+bAYIPW1UFH7JgfgEvgdsBw0F3gFfA79AQrQrQtSpk2qogdquWFVq10NOqpbdWLYa2anm6VRsGEsXONGOU4WkuNXULR6LYeTJjBc9uaFbbV6DgubOpZthEiEQduc2JsdOS5a00eZsTjmxzmUVnLExjMSdLdmyhzX+BgpD6C50oo5CXA5DtAAAAAElFTkSuQmCC" alt="pix" />
                  Gerar código</div><Plus/></div>
               </article>
               <article>
                  <h4>Boleto</h4>
                  <div><div><BanknoteArrowDown/>Gerar boleto</div><Plus/></div>
               </article>
            </div>
        </section>

         <section className='comprar'>
            <div className='topo'>
               <h4>Resumo da compra:</h4>
            </div>
            <div className='comprar-in'>
               <div className="precos">
               <div>
                  <div><p>Produtos({totalItens}):</p> <p>{formatarMoeda(precoTotal)}</p></div>
                  <div><p>Frete:</p> <p>{formatarMoeda(0)}</p></div>
               </div>
               <div className='total'><p>Total:</p> <p><strong>{formatarMoeda(precoTotal)}</strong></p></div>
               </div>
               <Link to="/compra-aprovada"><button>Finalizar compra</button></Link>
            </div>

         </section>
      </main>
   )
}

export default GuiaMedidas