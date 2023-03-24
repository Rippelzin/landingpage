import React, { useState, useEffect } from 'react';
//import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logouni.png'
import { SiOculus } from 'react-icons/si';
import { FaUserAlt } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';

import { useContext } from 'react';
import { UserContext } from '../utils/UserContext';


function Navbar() {
  const [click, setClick] = useState(false);
  

 

const [color, setColor] = useState(false)
const handleColor = () =>{
  if(window.scrollY >= 90){
    setColor(true)
  }
  else{
    setColor(false)
  }
}

window.addEventListener('scroll', handleColor)
  




  //cria uma varaivle pra guardar a info de logado ou nao
 
 


  const {logado, setLogado} = useContext(UserContext);
  
  

  return (
    <>
      <nav className={color ? 'navbar-scroll': 'navbar'}>
        <div className='navbar-container'>
          
          <Link to='/' className='navbar-logo' >
            <img src = {logo}/>
            {/*<i class='fab fa-typo3' />*/}
          </Link>
          {/*
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>*/}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' >
                <FaHome />
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/sobre'
                className='nav-links'>
                Sobre
              </Link>
            </li>

            <li className='nav-item'>
            <div className='nav-links-especial'>
                <div class="dropdown">
                  <button class="dropbtn">Produtos 
                    
                  </button>
                  <div class="dropdown-content">
                    <Link to= '/'>Animaverse</Link>
                    <Link to= '/'>Metaverso Na Odonto</Link>
                   </div> 
                </div>
            </div>
              
            </li>
              
              { logado === true? (
                  <li className='nav-item'>
                  <Link
                    to='/profile'
                    className='nav-links'
                    
                  >
                    <FaUserAlt/>
                    {/*<SiOculus />*/} 
                  </Link>
                  </li>
              ) 
              : 
              (
                
                <li className='nav-item'>
                <Link
                  to='/sign-in'
                  className='nav-links'
                  
                >
                  Entrar 
                </Link>
                </li>
              )
              }
                
         

           {/* <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>*/} 
          </ul>
          {/*{button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}*/}
        </div>
      </nav>
    </>
  );
}

export default Navbar;