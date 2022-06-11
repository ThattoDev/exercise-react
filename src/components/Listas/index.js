import { useState } from "react";

const Listas = () => {
    
    const [nomes] = useState ([
        {nome: "Thatto"},
        {nome: "Salvini"}, 
        {nome: "Thai"}, 
        {nome: "Brisson"}
    ]);

    return (
        
        <ul>
            {nomes.map((item) => (
                <li>{item.nome}</li>
            ))}
        </ul>
    )
}

export default Listas;






/**
 * import { useState } from 'react';

const Listas = () => {
    const [ nomes, setNomes ] = useState([
        {id: 1, nome: "João"}, 
        {id: 2, nome: "Felipe"}, 
        {id: 3, nome: "Ana"}, 
        {id: 4, nome: "Camila"}
    ])
    const [ frutas, setFrutas] = useState(["Banana", "Maçã", "Goiaba", "Uva", "Maracujá"])
    const [ frutaNova, setFrutaNova] = useState("");
    const [ nomeNovo, setNomeNovo] = useState("");

    const adicionaFruta = () => {
        setFrutas([...frutas , frutaNova])
        // setFrutas(["João", "Felipe", "Ana", "Camila", frutaNova]) equivalente a linha anterios, só que automático
        setFrutaNova("")
    }

    const adicionaNome = () => {
        setNomes([...nomes, {id: nomes.length + 1, nome: nomeNovo}])
        setNomeNovo("")
    }

    return(
        <>
            <ul>
                {nomes.map((item) => (
                    <li key={item.id}>{item.id} - {item.nome}</li>
                ))}
            </ul>
            <ul>
                {frutas.map((fruta, contador) => (<li key={contador}>Fruta: {fruta} - Index: {contador + 1} </li>))}
            </ul>

            <input type="text" value={frutaNova} onChange={(e) => setFrutaNova(e.target.value)}/>
            <input type="button" value="ADICIONAR FRUTA" onClick={adicionaFruta}/>

            <input type="text" value={nomeNovo} onChange={(e) => setNomeNovo(e.target.value)}/>
            <input type="button" value="ADICIONAR NOME" onClick={adicionaNome}/>
        </>
    );
}

export default Listas;

/*
    CRIAR UMA LISTA DE TAREFAS
    State com array de tarefas
    input para receber a tarefa
    um botão para adicionar a tarefa na lista
    Exibir a lista com um map em um componente novo
    Botão para limpar a lista de tarefas

    VERSIONAR e MANDAR O LINK DO GITHUB
*/
