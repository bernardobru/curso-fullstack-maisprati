import { useState } from "react";
const contentPage = [
    ["React is extremely popular", "It makes building complex, interactive UIs a breeze", "It's powerful & flexible", "It has a very active and versatile ecosystem"],
    ["Components, JSX & Props", "State", "Hooks (e.g., useEffect())", "Dynamic rendering"], 
    ["Official web page (react.dev)", "Next.js (Fullstack framework)", "React Native (build native mobile apps with React)"],
    ["Vanilla JavaScript requires imperative programming", "Imperative Programming: You define all steps needed to achieve a result", "React on the other hand embraces declarative programming", "With React, you define the goal and React figures out how to get there"]
]
function TabNav() {
    const [content, setContent] = useState(0);
    return (
        <>
            <div>
                <header>
                    <img src="../src/react-logo.png" alt="Logo do React" />
                    <h1>React.js</h1>
                    <p>i.e., using the React library for rendering the UI</p>
                </header>
            </div>
            <div id="tabs">
                <nav>
                    <ul>
                        <button onClick={() => setContent(0)}>Why React</button>
                        <button onClick={() => setContent(1)}>Core Features</button>
                        <button onClick={() => setContent(2)}>Related Resources</button>
                        <button onClick={() => setContent(3)}>React vs JS</button>
                    </ul>
                </nav>
            </div>
            <main>
                <div id="content">
                    <ul>
                        {contentPage[content].map((item) => {
                            return (<li>{item}</li>)
                        })}
                    </ul>
                </div>
            </main>
        </>
    )
}
export default TabNav;