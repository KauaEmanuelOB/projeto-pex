import { useEffect } from 'react'
import LoginForm from '../components/Login/LoginForm'

function Login() {
  useEffect(() => {
    document.title = "Login"
  }, [])

  return (
    <main>
      <LoginForm/>
    </main>
  )
}

export default Login