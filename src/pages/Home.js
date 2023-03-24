import React from 'react'
import style from './Home.css'
import robo from '../images/robo.png'
import robo2 from '../images/robo2'
import Ellipses from '../components/Ellipses.jsx'

import { useEffect } from 'react';

import jwt_decode from "jwt-decode";


//  height: 400px;
//width: 400px;
//object-position: 0px 0px ;
//float: right;

const Home = () => {
 
 
  
  return (
    <div className='content'>
        
      
        
            <div className='ellipse1'></div>
            <div className='ellipse2'></div>
            <div className="ellipse3"></div>
            <div className="ellipse4"></div>
            <div className="ellipse5"></div>
            
            {/*<div className='ellipse6'></div>
            <div className='ellipse7'></div>
            <div className='ellipse8'></div>
            <div className='ellipse9'></div>
  <div className='ellipse10'></div>*/}
            
            <div > 
        
        
        <h1 className='text1'>Explore o fascinante <br></br> mundo do metaverso <br></br> através dos oculos  VR</h1>
        <p className='text2'> </p>
      </div>
        

        <img src={robo} className='robo'/>  {/* se bota um elemento abaixo do outro ele fica na frente, tipo se o robo tivesse a cima das div de ellipse ele estaria atras delas*/}

        {/*<Ellipses />/*/}

      
        
        
    </div>
  )
}

export default Home