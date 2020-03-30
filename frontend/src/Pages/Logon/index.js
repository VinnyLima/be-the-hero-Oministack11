import React from 'react';
import {FiLogIn} from 'react-icons/fi';
import {Link} from  'react-router-dom';
import './style.css';

import heroeImg from '../../assets/heroes.png';
import logoimg  from '../../assets/logo.svg'

export default function Logon(){

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoimg} alt=""/>
                <form action="">
                    <h1>Faça seu Logon</h1>

                    <input placeholder="Sua ID"/>
                     <button className="button" type="submit">Entrar</button>
                     <Link className="BackLink" to="/cadastrar">
                         <FiLogIn size={16} color="#e02041"/>
                        Não tenho cadastro     
                    </Link>   
                </form>
            </section>
            <img src={heroeImg} alt=""/>

        </div>
    );
}