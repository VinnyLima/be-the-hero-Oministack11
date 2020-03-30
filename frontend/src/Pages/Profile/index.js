import React from "react";
import logoimg  from '../../assets/logo.svg'
import{Link} from 'react-router-dom';
import { FiPower, FiTrash2} from 'react-icons/fi';

import './style.css';

export default function Profile(){

    return(

     <div className="profile-container">
         <header>
             <img src={logoimg} alt="Be the Hero"/>
             <span>Bem vindo a APAD</span>

             <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
             <button type="button">
                    <FiPower size={18} color="#E02041"/>
             </button>
         </header>

         <h1>Casos Cadastrados</h1>

         <ul>
             <li>
                <strong>CASO: </strong> 
                <p>CAso Teste</p>
                <strong>DESCRIÇÃO</strong> 
                <p>Descrição teste</p>
                <strong>VALOR</strong> 
                <p>120,00</p>
                <button>
                    <FiTrash2 size={20} color="#a8a8b3"/>
                </button>
             </li>
             <li>
                <strong>CASO: </strong> 
                <p>CAso Teste</p>
                <strong>DESCRIÇÃO</strong> 
                <p>Descrição teste</p>
                <strong>VALOR</strong> 
                <p>120,00</p>
                <button>
                    <FiTrash2 size={20} color="#a8a8b3"/>
                </button>
             </li>
             <li>
                <strong>CASO: </strong> 
                <p>CAso Teste</p>
                <strong>DESCRIÇÃO</strong> 
                <p>Descrição teste</p>
                <strong>VALOR</strong> 
                <p>120,00</p>
                <button>
                    <FiTrash2 size={20} color="#a8a8b3"/>
                </button>
             </li>
             <li>
                <strong>CASO: </strong> 
                <p>CAso Teste</p>
                <strong>DESCRIÇÃO</strong> 
                <p>Descrição teste</p>
                <strong>VALOR</strong> 
                <p>120,00</p>
                <button>
                    <FiTrash2 size={20} color="#a8a8b3"/>
                </button>
             </li>             
         </ul>
     </div>
    );
}