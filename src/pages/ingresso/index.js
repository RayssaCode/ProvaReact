import axios from "axios";
import { useState } from "react"




export default function Index(){
    const [qtdInteiras, setQtdInteiras] = useState(0);
    const [qtdMeias, setQtdMeias] = useState(0);
    const [DiaSemana, setDiaSemana] = useState('');
    const [nacionalidade, setNacionalidade] = useState('')
    const [total, setTotal] = useState(0);

    async function calcular() {
        const resp = await axios.post('http://localhost:5000/dia2/ingressocinema', {
            qtdInteiras: qtdInteiras,
            qtdMeias: qtdMeias,
            DiaSemana: DiaSemana,
            nacionalidade: nacionalidade
         })

         setTotal(resp.data.total)
    }
    return (
        <main>
            <h1> Ingresso </h1>
            
            <div>
                qtd. Inteiras: <input type='text' value={qtdInteiras} onChange={e => setQtdInteiras(Number(e.target.value))} />
            </div>
            <div>
                qtd. Meias: <input type='text' value={qtdMeias} onChange={e => setQtdMeias(Number(e.target.value))} />
            </div>
            <div>
                Dia da Semana: <input type='text' value={DiaSemana} onChange={e =>setDiaSemana(e.target.value)} />
            </div>
            <div>
                Nascionalidade: <input type='text' value={nacionalidade} onChange={e => setNacionalidade(e.target.value)} />
            </div>
            <div>
                <button> Calcular </button>
            </div>
            <div>
                O total é R$
            </div>
        </main>
    )
}