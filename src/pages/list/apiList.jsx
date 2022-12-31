import React from "react";
import {useState, useEffect} from 'react'

import {Link} from 'react-router-dom'

import '../list/list.css'

export default function ApiList(){

    const [contents, setContents] = useState([])

    useEffect(()=>{
      async function listContentsTitles(){
        const response = await fetch('https://www.tabnews.com.br/api/v1/contents')
        const data = await response.json()
  
        setContents(data)
      }

      listContentsTitles()
    }, [])

    return(
        <div>
    <h1>Listagem da API do TabNews</h1>
    <ul>
      {
        contents.map(
          content =>(
            <li key={content.id}>
              {content.title}
            </li>
          )
        )
      }
    </ul>

      <Link to={'/'}>
        <button>Voltar à pagina inicial</button>
      </Link>

   </div>
    )
}
