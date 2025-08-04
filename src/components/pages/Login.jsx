
import { useContext, useState } from 'react'
import { AuthContext } from '../hooks/AuthContext'

const Login = () => {

const {login } = useContext(AuthContext)
const [form,setForm] = useState({ email: "", password: ""})


const handleSubmit  = async(e) => {
    e.preventDefault();
    const token  = await authService.Login(form)
    if (token)  Login(token)
}



  return (
    <form onSubmit={handleSubmit}  >
    <imput name="email" onChangue={e => setForm({...form, email: e.target.value})} />
    <imput name="password" type="password" onChangue={e => setForm({...form, password: e.target.value})} />
    <button type="sudmit">Login</button>
    </form>
  )
}

export default Login
