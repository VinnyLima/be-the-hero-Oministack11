import React, {useState}from 'react';
import {FiLogIn} from 'react-icons/fi';
import {Link, useHistory} from  'react-router-dom';
import api from '../../services/api';
import './style.css';

import heroeImg from '../../assets/heroes.png';
import logoimg  from '../../assets/logo.svg'

export default function Logon(){

    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogon(event){

        event.preventDefault();

        try {

            const response = await api.post('sessions', {id});
            
            localStorage.setItem('ongID', id);
            localStorage.setItem('ongName', response.data.ong.name);

            history.push('/profile');
        } catch (error) {
            alert('Erro ao logar verefique e tente novamente!')
            
        }

        

       

    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoimg} alt=""/>
                <form onSubmit={handleLogon}>
                    <h1>Faça seu Logon</h1>

                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                        />
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