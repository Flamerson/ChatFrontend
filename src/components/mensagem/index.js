import React from 'react'
import './style.css'

const Mensagem = () => {

    var men = [
        {
            name:"flamerson",
            mensagem:"lorem ipsum asfasf asfasfa asfasfas asfasfas asfasfa sasfasf asfasfas asfasfas"
        },
        {
            name:"eu",
            mensagem:"lorem ipsum asfasf asfasfa asfasfas asfasfas asfasfa sasfasf asfasfas asfasfas"
        },
        {
            name:"flamerson",
            mensagem:"lorem ipsum asfasf asfasfa asfasfas asfasfas asfasfa sasfasf asfasfas asfasfas"
        },
        {
            name:"flamerson",
            mensagem:"lorem ipsum asfasf asfasfa asfasfas asfasfas asfasfa sasfasf asfasfas asfasfas"
        },
        {
            name:"eu",
            mensagem:"lorem ipsum asfasf asfasfa asfasfas asfasfas asfasfa sasfasf asfasfas asfasfas"
        },
        {
            name:"eu",
            mensagem:"lorem ipsum asfasf asfasfa asfasfas asfasfas asfasfa sasfasf asfasfas asfasfas"
        },
    ]

    var user1 = "eu"
    var user2 = "fla"

  return (
    <ul className='message-body_chat'>
      {
        men.map((men, index) => (
            <li className={men.name === user1?"people":"visitor"} key={index}>
                
                {men.name === user1?
                <div className='men'>
                    <p>lorem ipsum asfasf asfasfa asfasfas asfasfas asfasfa sasfasf asfasfas asfasfas</p>
                </div>:
                <div className='men'>
                    <p className='menssage-name'>{men.name}</p>
                    <p>lorem ipsum asfasf asfasfa asfasfas asfasfas asfasfa sasfasf asfasfas asfasfas</p> 
                </div>
                }
                
            </li>
        ))
      }
    </ul>
  )
}

export default Mensagem
