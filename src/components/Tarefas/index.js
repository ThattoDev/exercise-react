import { useState } from 'react';

const listTarefa = () => {
    const [ tarefas, setTarefas ] = useState("")
    const [tarefaNova, setTarefaNova] = useState("")

    // const adicionaTarefas = () => {
    //     setTarefas([...tarefas , tarefaNova])
    //     setTarefaNova("")
    // }

    const adicionarTarefas = () => {
        setTarefas([...tarefas, {id: tarefas.length + 1, tarefa: tarefaNova}])
        setTarefaNova("")
    }

    return(
        <>
            <h1>Lista de tarefas</h1> <br/>
            <ul>
                {tarefas.map((tarefa, count) => (<li key={count}>Tarefa: {tarefa} - Index: {count + 1} </li>))}
            </ul>

            <input type="text" value={tarefaNova} onChange={(e) => setTarefaNova(e.target.value)}/>
            <input type="button" value="ADICIONAR" onClick={adicionarTarefas}/>
        </>
    );
}

export default listTarefa;