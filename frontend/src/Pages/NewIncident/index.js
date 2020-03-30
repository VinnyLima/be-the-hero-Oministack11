import React from 'react';
import logoimg  from '../../assets/logo.svg'
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';


import './style.css'

export default function NewIncident(){
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                <img src={logoimg} alt="Be the Hero"/>
                <h1>Cadastro novo Caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso</p>

                <Link className="BackLink" to="/profile">
                         <FiArrowLeft size={16} color="#e02041"/>
                        Voltar para Casos    
                    </Link> 
                </section>
                <form >
                    <input placeholder="Titulo do caso"/>
                    <textarea  placeholder="Descrição"/>                  
                    <input type="number" placeholder="Valor em Reais"/>
                                      
                    <button className="button" type="submit">Cadastrar</button>
                    

                </form>
            </div>
        </div>
    );

}