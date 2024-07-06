import { useState } from "react";
function tabNavegate() {
    const text = [ 
        
    ]
    const [tabNav, setTabNav] = useState(text.text1);
    const changeText = (indice) => {
        setTabNav(text[indice]);
    }
    return (
        <div>
            <button onClick={changeText}>Why React?</button>
            <button onClick={changeText}>Core Features</button>
            <button onClick={changeText}>Related Resources</button>
            <button onClick={changeText}>React vs JS</button>
        </div>
    )
}
export default tabNavegate;