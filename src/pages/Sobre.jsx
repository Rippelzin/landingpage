import React from 'react'
import styles from './Sobre.css'
import Paragrafo from '../components/paragrafo.jsx'
import imgEquipe from '../images/time-ti-metaverso.png'
import { Link } from 'react-router-dom';
import { BsInstagram} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'

import imgOculus from '../images/oculus-vr-sobre.png'
import imgValores from '../images/img-valores.png'


const Sobre = () => {
  return (
    <div>
        
        <div className='sobre-block'> 
            
            <div>

                <div className='sobre-missao'>
                    
                    <h1 className='titulo-missao'>nossa missao</h1>
                    <p className='paragrafo-missao'> <Paragrafo  /></p>
                    
                 </div>

                 <img src={imgOculus} className='img-oculus'></img>
            </div>


            
            
            <div>
                <div className='sobre-equipe'>
                        
                        <h1 className='titulo-equipe'>nossa equipe</h1>
                        <p className='paragrafo-equipe'> <Paragrafo  /></p>
                        
                            
                        
                    </div>
                <img src={imgEquipe} className='img-equipe'></img>
            </div>
                
            <div>
                <div className='sobre-valores'>
                        
                        <h1 className='titulo-valores'>nossos valores</h1>
                        <p className='paragrafo-valores'> <Paragrafo  /></p>
                        
                            
                        
                    </div>
                    <img src={imgValores} className='img-valores'></img>
            </div>
                
                
                
         </div>





         <div className='contato-block'> 
            <h1 className='contato'>Contato</h1>
            <div className='icons'>
            
            <a href={'https://www.instagram.com/gabriel_rippel/'}> 
                <BsInstagram className='instagram-icon'/>
            </a>
            
            <div className='line-sobre-icons'>   </div>
            <SiGmail className='gmail-icon'/>

        
        </div>
        

         </div>

    </div>
  )
}

export default Sobre