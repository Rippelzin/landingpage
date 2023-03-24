import React from 'react'
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";
import './SignIn.css'
import { Link } from 'react-router-dom';

import { FaUserAlt } from 'react-icons/fa';
import {RiLockPasswordFill} from 'react-icons/ri';
import {SiOculus} from 'react-icons/si'
import {CgUserAdd} from 'react-icons/cg'

import {useNavigate} from 'react-router-dom';

import { useEffect } from 'react';



import Login from '../components/Login';

const SignIn = () => {
 
  Axios.defaults.withCredentials = true;

    const handleLogin = (values) => 
        Axios.get("http://localhost:3002/login", { //mudei do post pro get
          ra: values.ra,
          password: values.password,
        }).then((response) => {
          console.log('deu bom')
          //console.log(response)
        });
        

      const validationSchema = yup.object({
        ra: yup
      .number()
      .required("Insira seu Ra")
      .positive()
      .min(8, "tamanho minimo exigido igual a 8")
      .integer(),
        password: yup
          .string()
          .min(8, "Minimo de 8 digitos")
          .required("Insira sua Senha")
      });


      const navigate = useNavigate();
      
      const encaminhar = () =>{
        navigate('/sign-up')
      }

    
     
    

 
    return (
    <div> 

            <div className='ellipse1-sg'></div>
            <div className='ellipse2-sg'></div>
            <div className="ellipse3-sg"></div>
            <div className="ellipse4-sg"></div>
            <div className="ellipse5-sg"></div>
            <div className='form-area'>
        
        <h1>Login</h1>
         
        {<Formik
      
      initialValues={{ ra: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit = {handleLogin}
        >
      <div >
        
        <Form  >
          
          <div className='ra-field'>
          <FaUserAlt className='icon-ra'/>
            <Field type="number" name="ra" placeholder="Digite seu RA" className='formulario' />
            <ErrorMessage   component="div" name="ra" />
          </div>

          
          <div className='psw-field'>
          <RiLockPasswordFill className='icon-password'/>
            <Field type="password" name="password" placeholder="Digite sua senha" className='formulario' />
            <ErrorMessage component="div" name="password" />
          </div>

        <button className='login-button' type="submit"> <SiOculus className='oculus'/> </button>
        </Form>
      </div>
    </Formik>}
          <div > 
            <div className='ou-box'> 
              <div className='line1'>   </div>
              <div className='ou'>ou</div>
              <div className='line2'>   </div>
             </div>
            
            <button className='to-signup' onClick={encaminhar}> <CgUserAdd className='sign-up-icon'/> </button>
          </div>

         
          
          <Login />
    
    </div>
          
    
    
    </div>
    
    
  )
}

export default SignIn