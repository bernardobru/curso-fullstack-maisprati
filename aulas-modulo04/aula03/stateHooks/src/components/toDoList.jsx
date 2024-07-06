import { useState } from "react";
function ToDoList() {
    //Inicializa a lista vazia
    const [toDo, setToDo] = useState([]);
    //Inicializa a tarefa vazia
    const [inputValue, setInputValue] = useState('');
    //Adiciona a tarefa atual, mantendo o que já existia no array
    const addTask = () => {
        setToDo([...toDo, inputValue]);
        //Quando é adicionado, o input fica vazio
        setInputValue('');
    }
    return (
        <div>
            <input type="text"
            value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={addTask}>Adicionar tarefas</button>
            <ul>
                {toDo.map((toDo, index) => 
                    <li key={index}>{toDo}</li>
                )};
            </ul>
        </div>
    );
}
export default ToDoList;