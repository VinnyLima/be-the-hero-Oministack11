import React from 'react'
import logoimg  from '../../assets/logo.svg'
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './style.css'


export default function Register(){

    return(
        <div className="register-container">
            <div className="content">
                <section>
                <img src={logoimg} alt="Be the Hero"/>
                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</p>

                <Link className="BackLink" to="/">
                         <FiArrowLeft size={16} color="#e02041"/>
                        Voltar para Logon     
                    </Link> 
                </section>
                <form >
                    <input placeholder="Nome da ONG"/>
                    <input type="email" placeholder="E-mail"/>
                    <input placeholder="WahtsApp"/>

                    <div className="input-group">
                    <input placeholder="Cidade"/>
                    <input placeholder="UF"/>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                    

                </form>
            </div>
        </div>
        
    );

}