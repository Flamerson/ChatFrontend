import React from 'react'
import './style.css'

const LoginInputs = () => {
  return (
    <div className='input-page_login-body_inputs'>
      <input type="text" className='input-page_login' placeholder='Name'/>     
      <input type="password" className='input-page_login' placeholder='Password'/>
      <button type='button' className='input-page_button'>Login</button>
    </div>
  )
}

export default LoginInputs
