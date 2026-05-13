import { useEffect } from 'react'
import CadastroForm from '../../components/Cadastro/CadastroForm'

function Cadastro() {
  useEffect(() => {
    document.title = "Cadastro"
  }, [])

  return (
    <main>
      <CadastroForm/>
    </main>
  )
}

export default Cadastro