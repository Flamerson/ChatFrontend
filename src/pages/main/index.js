import React from 'react';
import './style.css'
import Chat from '../../containers/chat';
import ListFriends from '../../containers/listFriends';

const Main = () => {
  return (
    <div className='main-content'>
      <ListFriends/>
      <Chat/>
    </div>
  )
}

export default Main;
