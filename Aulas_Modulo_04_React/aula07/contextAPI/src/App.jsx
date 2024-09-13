/* import MyChildren from './components/Children'; */
import { createContext, useContext, useState } from 'react';    
//Padrão de contexto
const PreferencesContext = createContext({theme: 'light', lang: 'en'});
function App() {
  const [preferences, setPreferences] = useState({theme: 'light', lang: 'en'});
  const toggleTheme = () => {
    setPreferences(preference =>  ({
      theme: preference.theme === 'light' ? 'dark' : 'light'
    }));
  }
  const toggleLang = (lang) => {
    setPreferences((currentLang) => ({
      ...currentLang, lang: lang
    }));
  }
  return(
    <PreferencesContext.Provider value={{preferences, toggleTheme, toggleLang}}>
      <div style={{backgroundColor: preferences.theme === 'dark' ? '#333333' : '#fdfdfd'}}>
        <ToolBar/>
        <button onClick={toggleTheme}>Trocar tema</button>
        <button onClick={() => toggleLang('pt-br')}>Trocar idioma para português</button>
        <button onClick={() => toggleLang('en')}>Trocar idioma para inglês</button>
      </div>
    </PreferencesContext.Provider>
  );
}
function ToolBar() {
  const {preferences} = useContext(PreferencesContext);
  return(
    <div style={{backgroundColor: preferences.theme === 'dark' ? '#454545' : '#fcfcfc', color: preferences.theme === 'dark' ? '#ffffff' : '#000000'}}>
        Preferências: Tema: {preferences.theme} e Idioma: {preferences.lang}
    </div>
  )
}
export default App;