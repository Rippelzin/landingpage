import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../utils/UserContext';

import UserInfo from '../utils/UserInfo';

import { useNavigate } from 'react-router-dom';

const Profile = () => {
  
  
const name = localStorage.getItem('user_name')
const email = localStorage.getItem('user_email')
const picture = localStorage.getItem('user_picture')


const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.setItem('user_verified', 'false')
    setLogado(false)
    console.log(localStorage.getItem('user_verified'))
    navigate('/')
  }

  const {logado, setLogado} = useContext(UserContext);
  
  return (
    <div>
      
      {logado === true ?(
        < UserInfo />
      )
    :
    (
      console.log('voce nao esta logado')
    )
    }
      
      
      
      <button onClick={() => handleLogout()}> logout</button>



    </div>
  )
}

export default Profile