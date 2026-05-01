import './Tamanhos.css'

function Tamanhos({ tamanhos }) {
  return (
    <div className="tamanhos">
      {tamanhos.map((tamanho,index) => (
        <div key={index} className="tamanho">
          {tamanho}
        </div>
      ))}
    </div>
  )
}

export default Tamanhos