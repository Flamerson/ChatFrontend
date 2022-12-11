import React from 'react'
import './style.css'

import NavbarListFriends from '../../components/navbarListFriends'
import PersonsListFriends from '../../components/personsListFriends'

const ListFriends = () => {
  return (
    <div className='listFriends'>
        <NavbarListFriends/>
        <PersonsListFriends/>
    </div>
  )
}

export default ListFriends
