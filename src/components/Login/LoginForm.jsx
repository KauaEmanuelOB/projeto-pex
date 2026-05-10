import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './LoginForm.css'

function LoginForm() {
  useEffect(() => {
    document.title = "LoginForm"
  }, [])

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function handleLogin(){

    const emailValido = /\S+@\S+\.\S+/

    if (!emailValido.test(email)){
      alert('Digite um e-mail válido')
      return
    }

    if (senha.length < 6) {
      alert('A senha deve ter pelo menos 6 caracteres')
      return
    } 

    navigate('/')
  }



  return (
    <main className="login-container">

      <div className="login-box">

        <p className="login-breadcrumb">
          Início &gt; Minha conta &gt; Login
        </p>

        <h1 className="login-title">
          Iniciar sessão
        </h1>

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
            htmlFor="controlSenha"
            className="form-label"
          >
            Senha
          </label>

          <input
            type="password"
            className="form-input"
            id="controlSenha"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <button
          type='button'
          className='login-button'
          onClick={handleLogin}
        >
          Entrar
        </button>

        <p className="register-text">
           Não possui uma conta? <Link to="/cadastro">Criar uma conta</Link>
        </p>

      </div>

    </main>
  )
}

export default LoginForm