import {GoogleLogin} from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import {useGoogleLogin} from '@react-oauth/google';
import axios from "axios"
import {useState} from 'react'
import { useContext } from 'react';
import { UserContext } from '../utils/UserContext';
import '../utils/UserInfo.jsx';
import { useNavigate } from 'react-router-dom';





const Login = () => {


  const {logado, setLogado} = useContext(UserContext);
  const navigate = useNavigate()

  
  return (
    <div>
         <GoogleLogin
                 onSuccess={credentialResponse => {
                  console.log(credentialResponse);
                  var decoded = jwt_decode(credentialResponse.credential);
                  console.log(decoded)
                  setLogado(true)
                  localStorage.setItem('user_name',decoded.name)
                  localStorage.setItem('user_email',decoded.email)
                  localStorage.setItem('user_picture',decoded.picture)
                  console.log(decoded.email_verified)
                  navigate('/profile')
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
/>;
    </div>
  )
}

export default Login