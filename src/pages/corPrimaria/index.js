
import axios from "axios"
import { useState } from "react"



export default function Index(){
    const [cor, setCor] = useState('');

    function verificarCorPrimaria() {
        
        //Terminar o axios.get(''), video 3 explica
        axios.get('')
    }

    return (
        <main>
            <h1>Cor Primária</h1>
           
           <div>
               cor: <input type='text' value={cor} onChange={e => setCor(e.target.Value)} />
           </div>
           <div>
               <button onClick={verificarCorPrimaria}> Verificar </button>
           </div>
           <div>
               Écor primária?
           </div>
        </main>
    )
}