import React from 'react'
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";



const SignUp = () => {
  
  Axios.defaults.withCredentials = true;

    const handleCadastro = (values) => 
        Axios.post("http://localhost:3002/login", { //http://35.247.238.87/
          ra: values.ra,
          password: values.password,
        }
        ).then((response) => {
          console.log('deu certo')
        });
      
    
      

      const validationSchema = yup.object({
        ra: yup
      .number()
      .required("Ra e obrigatorio")
      .positive()
      .min(8, "tamanho minimo exigido igual a 8")
      .integer(),
        password: yup
          .string()
          .min(8, "Password minimum 8 characters")
          .required("Password is required"),
        passwordConfirmation: yup
          .string()
          .min(8, "Password minimum 8 characters")
          .required("Password is required")
          .oneOf([yup.ref('password')], 'Passwords must match')
      });

 
    return (
    <div>
        <h1>Cadastro</h1>
      

        {<Formik
      initialValues={{ ra: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit = {handleCadastro}
        >
      <div>
        
        <Form>
          <div>
            <Field type="number" name="ra" placeholder="RA" className='formulario' />
            <ErrorMessage component="div" name="ra" />
          </div>

          <div>
            <Field type="password" name="password" placeholder="Senha" className='formulario' />
            <ErrorMessage component="div" name="password" />
          </div>
          <div>
            <Field type="password" name="passwordConfirmation" placeholder="Confirme a senha" className='formulario' />
            <ErrorMessage component="div" name="passwordConfirmation" />
          </div>

          {/*<div className="form-group">
            <Field name="confirmation" className="form-field" placeholder="password"/>

            <ErrorMessage component="span"name="confirmation" className="form-error"/>
          </div>*/}

        <button type="submit">Submit</button>
        </Form>
      </div>
    </Formik>}
    </div>
  )
}

export default SignUp;