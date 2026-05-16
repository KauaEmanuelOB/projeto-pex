import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../Login/LoginForm.css'

function CadastroForm() {
  useEffect(() => {
    document.title = "CadastroForm"
  }, [])

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [nome, setNome] = useState('')
  const [senhaconfirmacao , setSenhaconfirmacao ] = useState('')

  function handleLogin(){

    if (nome.length < 1) {
        alert('Preencha o nome!')
        return
    }

    const emailValido = /\S+@\S+\.\S+/

    if (!emailValido.test(email)){
      alert('Digite um e-mail válido')
      return
    }

    if (senha.length < 6)  {
      alert('A senha deve ter pelo menos 6 caracteres!')
      return
    } 

    if (senha !== senhaconfirmacao)  {
        alert('A senha de confirmaçao está diferente!')
        return
      } 

    navigate('/')
  }

  return (
    <main className="login-container">

      <div className="login-box">

        <p className="login-breadcrumb">
          Início &gt; Minha conta &gt; Cadastro
        </p>

        <h1 className="login-title">
          Cadastre-se
        </h1>

        <div className="input-group">
          <label
            htmlFor="controlNome"
            className="form-label"
          >
            Nome Completo
          </label>

          <input
            type="text"
            className="form-input"
            id="controlNome"
            placeholder="Ex: Maria de Fátima de Oliveira"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label
            htmlFor="controlEmail"
            className="form-label"
          >
            E-mail
          </label>

          <input
            type="email"
            className="form-input"
            id="controlEmail"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>


        <div className="input-group">
          <label
            htmlFor="controlTelefone"
            className="form-label"
          >
            Telefone (opcional)
          </label>

          <input
            type="telefone"
            className="form-input"
            id="controlTelefone"
            placeholder="Ex: 47987654321"
          />
        </div>

        <div className="input-group">
          <label
            htmlFor="controlSenha"
            className="form-label"
          >
            Senha
          </label>

          <input
            type="password"
            className="form-input"
            id="controlSenha"
            placeholder="Ex: suasenha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label
            htmlFor="controlSenha"
            className="form-label"
          >
            Confirmar senha
          </label>

          <input
            type="password"
            className="form-input"
            id="controlSenha"
            placeholder="Ex: suasenha"
            value={senhaconfirmacao}
            onChange={(e) => setSenhaconfirmacao(e.target.value)}
          />
        </div>

        <button
          type='button'
          className='login-button'
          onClick={handleLogin}
        >
          Cadastrar
        </button>

        <p className="register-text">
           Já possui uma conta? <Link to="/login">Faça login</Link>
        </p>

      </div>

    </main>
  )
}

export default CadastroForm