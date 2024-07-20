/* import MyChildren from './components/Children'; */
import { createContext, useContext, useState } from 'react';    
//Padrão de contexto
const ThemeContext = createContext({theme: 'light', toggleTheme: () => {}});
function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
      setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light');
  }
  return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
          <div style={{backgroundColor: theme === 'dark' ? '#333333' : '#fdfdfd'}}>
            <ToolBar/>
            <button onClick={toggleTheme}>Alternar tema</button>
          </div>
        </ThemeContext.Provider>
  );
}
function ToolBar() {
    const {theme} = useContext(ThemeContext);
    return(
        <div>
            Tema: {theme}
        </div>
    )
}

export default App;