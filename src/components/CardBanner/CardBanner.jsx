import { useState, useRef, useEffect } from 'react'
import './CardBanner.css'
import { Truck, CreditCard, ShieldCheck, RefreshCcw, TicketPercent, BadgePercent } from 'lucide-react'

function CardBanner() {
   const [posicao, setPosicao] = useState(0)
   const carrossel = useRef(null)
   const [larguraBanner, setLarguraBanner] = useState(6);

   useEffect(() => {
      if (!carrossel.current) return;

      const observer = new ResizeObserver(entries => {
         const larguraElemento = entries[0].contentRect.width;

         if (larguraElemento >= 1200) {
            setLarguraBanner(2);
         } else if (larguraElemento >= 800) {
            setLarguraBanner(3);
         } else {
            setLarguraBanner(6);
         }
      });

      observer.observe(carrossel.current);
      return () => observer.disconnect();
   }, []);

   useEffect(() => {

      if (carrossel.current) {
         carrossel.current.style.transform = `translateX(-${posicao * 100}%)`
      }
   }, [posicao])

   useEffect(() => {
      let tempo
      if (larguraBanner == 6)
         tempo = 2500;
      else if (larguraBanner == 3)
         tempo = 3500;
      else {
         tempo = 6000;
      }
      const interval = setInterval(() => {
         setPosicao((prev) => {
            let nova = prev + 1
            if (nova >= larguraBanner) nova = 0
            return nova
         })
      }, tempo)
      return () => clearInterval(interval)
   }, [larguraBanner])

   return (
      <div className='card-banner'>
         <div className="carrossel-corte">
            <div
               className='carrossel'
               ref={carrossel}
            >
               <div>
                  <Truck size={40}/>
                  <div>
                     <h4>Frete Fixo</h4>
                     <p>A partir de R$9,90</p>
                  </div>
               </div>
               <div>
                  <CreditCard size={40}/>
                  <div>
                     <h4>Parcele Suas Compras</h4>
                     <p>Em até 6x sem juros</p>
                  </div>
               </div>
               <div>
                  <ShieldCheck size={40}/>
                  <div>
                     <h4>Compra Segura</h4>
                     <p>Sua compra garantida</p>
                  </div>
               </div>
               <div>
                  <RefreshCcw size={40}/>
                  <div>
                     <h4>Troca Fácil</h4>
                     <p>Devoluções e trocas garantidas</p>
                  </div>
               </div>
               <div>
                  <TicketPercent size={40}/>
                  <div>
                     <h4>Cupom BEMVINDA10</h4>
                     <p>10% OFF na primeira compra.</p>
                  </div>
               </div>
               <div>
                  <BadgePercent size={40}/>
                  <div>
                     <h4>5% OFF no PIX</h4>
                     <p>Desconto de 5% em compras com PIX</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )

}

export default CardBanner