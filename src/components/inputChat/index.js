import React from 'react'
import './style.css'

const InputChat = () => {
  return (
    <div className='input-chat'>
      <input type='text' className='input-chat_text'/>
      <button type='button' className='input-chat_button'>Send</button>
    </div>
  )
}

export default InputChat
