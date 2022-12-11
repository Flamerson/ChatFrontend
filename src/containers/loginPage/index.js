import React, { useState } from 'react'
import './style.css'

import LoginInputs from '../../components/loginInputs'
import SignInputs from '../../components/signInputs'

const LoginPage = () => {

    const [page, setPage] = useState("login")

    const handleLogin = () => {      
        page === "login"? setPage("sign-up"): setPage("login")
    }


  return (
    <>
      {page === "login"?
        <div className='login-page_body'>
            <LoginInputs/>
            <p>Don't have a account? </p>
            <a onClick={handleLogin} className="login-page_button">Sign-up</a>
        </div>
        :
        <div className='login-page_body'>
            <SignInputs />
            <p>Have a account? </p>
            <a onClick={handleLogin} className="login-page_button" >Login</a>
        </div>
    }
    </>
  )
}

export default LoginPage
