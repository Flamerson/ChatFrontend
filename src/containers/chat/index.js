import React from 'react'
import './style.css'

import NavbarChat from '../../components/navbarChat'
import BodyChat from '../../components/bodyChat'
import InputChat from '../../components/inputChat'

const Chat = () => {
  return (
    <div className='chat'>
      <NavbarChat/>
      <BodyChat />
      <InputChat/>
    </div>
  )
}

export default Chat
