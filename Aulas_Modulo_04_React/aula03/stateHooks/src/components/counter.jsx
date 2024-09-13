import { useState } from "react";
function Counter() {

    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Você clicou {count} vezes</p>
            <button onClick={() => setCount(count + 1)}>
                Clique aqui
            </button>
        </div>
    )
}
export default Counter;
    //retorna array contendo estado atual e uma função que atualiza o estado
    //O 0 indica o estado atual do contador