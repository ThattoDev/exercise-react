import { useState } from "react"

const Frutas = () => {
    const [frutas, setFrutas] = useState(["Limão", "Morango", "Abacaxi", "Abacate", "Manga"])
    const [ frutaNova, setFrutaNova] = useState("");


    const adicionarFruta = () => {
        setFrutas([...frutas , frutaNova]);
    }

    return (
        <>
        <ul>
            {frutas.map((frutas, index) => (
                <li>{index +1} {frutas}</li>
            ))}
        </ul>

        <input type="text" value={frutaNova} onChange ={(e) => setFrutaNova(e.target.value)} />
        <input type="button" value="ADICIONAR" onClick={adicionarFruta} />
        </>
    )
}

export default Frutas;