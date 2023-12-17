import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

  const [user , setUser] = useState({})

  useEffect(() => {
    const storeUser = JSON.parse(localStorage.getItem("user"))
    setUser(storeUser)
  },[])
  return (
    <div>
      <nav className="navbar navbar-expand-lg  nav-container">
        <div className="container">
          <a className="navbar-brand" href="#">Smart Spend</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/addtransaction"}>AddTransaction</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/showtransaction"}>Showtransaction</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/signup"}>Signup</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/login"}>Login</Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active user" aria-current="page">Hello , {user?.name || "User"}
                {
                  user?.name ? <span onClick={() => {
                    localStorage.removeItem('user')
                    window.location.href = '/login'
                  }} className='logout'>Logout</span> : null
                }
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
