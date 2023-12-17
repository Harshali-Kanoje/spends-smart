import React, { useState ,useEffect} from 'react'
import './Signup.css'
import Navbar from '../../component/Navbar/Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Signup = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mobile, setMobile] = useState('')
  const [address, setAddress] = useState('')

  const signup = async () => {

    if(!name)
    {
      alert("Name is required")
      return
    }

    if(!email)
    {
      alert("Email is required")
      return
    }

    if(!password)
    {
      alert("Password is required")
      return
    }

    if(!mobile)
    {
      alert("Mobile is required")
      return
    }

    if(!address)
    {
      alert("Address is required")
      return
    }

    const response = await axios.post('/api/signup',{
      name,
      email,
      password,
      mobile,
      address
    })

    alert(response?.data?.message)

    if(response?.data?.success)
    {
      window.location.href= './login'
    }
  }

  useEffect(() => {
    const storeUser = JSON.parse(localStorage.getItem("user" || "{}"))
    if(storeUser?.email)
    {
      alert("You have already signup !")
      window.location.href = '/'
    }
  },[])
  return (
    <>
    <Navbar/>
    <div className='signup-container'>
      <form>
        <div className='signup-form-container'>
          <p className='signup-heading'>Signup here !</p>
          <input type='text' placeholder='Enter Your Name' value={name} onChange={(e) => {
            setName(e.target.value)
          }}
            className='input-signup'
          />

          <input type='email' placeholder='Enter Your Email' value={email} onChange={(e) => {
            setEmail(e.target.value)
          }}
            className='input-signup'
          />

          <input type='password' placeholder='Enter Your Password' value={password} onChange={(e) => {
            setPassword(e.target.value)
          }}
            className='input-signup'
          />

          <input type='number' placeholder='Enter Your Number' value={mobile} onChange={(e) => {
            setMobile(e.target.value)
          }}
            className='input-signup'
          />

          <input type='text' placeholder='Enter Your Address' value={address} onChange={(e) => {
            setAddress(e.target.value)
          }}
            className='input-signup'
          />

          <button type='button' onClick={signup} className='signup-btn'>Signup</button>
          <p className='signup-account'>Already having an account? <Link className='login' to={'/login'}>Login</Link></p>
          </div >
      </form>
    </div>
    </>
  )
}

export default Signup
