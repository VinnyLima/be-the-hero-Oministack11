import React, {useState}from 'react';
import logoimg  from '../../assets/logo.svg'
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api'

import './style.css'

export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongID');

    async function handleNewIncident(event){
        event.preventDefault();

        const data = {
            title,
            description,
            value,
        };
       
        try {
           await  api.post('incidents', data, {
               headers:{
                idong:ongId
               }
            
           });

           history.push('/profile');
            
        } catch (error) {
            alert('Não foi possivel cadatrar um novo incidente');
            
        }
    

    }

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
                <form onSubmit={handleNewIncident}>
                    <input 
                    placeholder="Titulo do caso"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    />

                    <textarea  
                    placeholder="Descrição"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    />   


                    <input type="number" 
                    placeholder="Valor em Reais"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    />

                                      
                    <button className="button" type="submit">Cadastrar</button>
                    

                </form>
            </div>
        </div>
    );

}