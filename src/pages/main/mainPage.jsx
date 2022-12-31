import React from "react";
import {Link} from 'react-router-dom'

import '../main/main.css'

export default function Landing(){
    return(
        <div className="container">
            <h1>Nessa aplicação mostro uma listagem de dados recebidos da API de um site de tecnologia</h1>
            
            <Link to={'/list'}>
            <button id="btn-to-list">Ver lista</button>
            </Link>
        </div>
    )
}