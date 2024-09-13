import { useState } from "react";
function tabNavegation() {
    const content = [
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, repellendus?",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, repellendus?",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, repellendus?"
    ]
    const [text, setContent] = useState('firstTab');
    const handleFirstTab = () => {
        setContent(content(0));
    }
    const handleSecondTab = () => {
        setContent(content(1));
    }
    const handleThirdTab = () => {
        setContent(content(2));
    }
    return (
        <div>
            <ul>
                <li id="firstTab" onClick={handleFirstTab}>First Tab</li>
                <li id="secondTab" onClick={handleSecondTab}>Second Tab</li>
                <li id="thirdTab" onClick={handleThirdTab}>Third Tab</li>
            </ul>
            <div>
                {if(text === 'firstTab'){
                    
                }}
            </div>
        </div>
    );
}
export default tabNavegation;