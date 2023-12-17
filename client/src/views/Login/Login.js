import React, { useEffect, useState } from 'react'
import './Login.css'
import Navbar from '../../component/Navbar/Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = async () => {

    if (!email) {
      alert("Email is required")
      return
    }

    if (!password) {
      alert("Password is required")
      return
    }

    const response = await axios.post('/api/login', {
      email,
      password,
    })

    alert(response?.data?.message)

    if (response?.data?.success) {
      localStorage.setItem('user', JSON.stringify(response?.data?.data))
      window.location.href = './'
    }


  }
  useEffect(() => {
    const storeUser = JSON.parse(localStorage.getItem("user" || "{}"))
    if (storeUser?.email) {
      alert("You have already logged in!")
      window.location.href = '/'
    }
  }, [])

  return (
    <>
      <Navbar />
      <div className='login-container'>
        <form>
          <div className='login-form-container'>
            <p className='login-heading'>Login here!</p>
            <input type='email' placeholder='Enter Your Email' value={email} onChange={(e) => {
              setEmail(e.target.value)
            }}
              className='input-login'
            />

            <input type='password' placeholder='Enter Your Password' value={password} onChange={(e) => {
              setPassword(e.target.value)
            }}
              className='input-login'

            />

            <button type='button' onClick={login} className='login-btn'>Login</button>
            <p className='login-account'>Don't have an account? <Link className='signup' to={'/signup'}>Signup</Link></p>
          </div >
        </form>
      </div>
    </>
  )
}

export default Login;
