import React, { useState } from 'react'
import './style.css'

const PersonsListFriends = () => {

    const [data, setData] = useState([])

    var persons = [
        {name:"flamerson",
         menssage:"Hello world",
         status:"online",
        },
        {name:"baymax",
         menssage:"Hello world",
         status:"online",
        },
        {name:"flamerson",
         menssage:"Hello world",
         status:"online",
        },
        {name:"flamerson",
         menssage:"Hello world",
         status:"online",
        },
        {name:"flamerson",
         menssage:"Hello world",
         status:"online",
        }
    ]

    const handleChange = (index) => {
        console.log(index)
    }


  return (
    <div>
      <ul className='person-main'>
        {persons.map((person, index) => (
            <li className='person' key={index}>
                <a onClick={() => handleChange(person.name)} className="btn-person">
                    <div className='person-picture' />
                    <div className='person-name_message'>
                        <p>{person.name}</p>
                        <p className='light-text'>{person.menssage}</p>
                    </div>
                </a>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default PersonsListFriends
