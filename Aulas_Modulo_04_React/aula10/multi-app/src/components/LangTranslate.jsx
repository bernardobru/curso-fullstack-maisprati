import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'
function LangTranslate() {
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    `;
    const Title = styled.h1`
        color: #363636;
        text-align: center; 
        text-shadow: 1px 1px #00000083;
    `;
    const Label = styled.label`
        color: #555555;
    `;
    const TranslatedText = styled.p`
        color: #363636;
    `;
    const [text, setText] = useState('');
    const [inputLang, setInputLang] = useState('pt');
    const [outputLang, setOutputLang] = useState('en');
    const [translatedText, setTranslatedText] = useState('');
    const translateText = async () => {
        try {
            const response = await axios.get('https://api.mymemory.translated.net/get',{ 
                params: { 
                    q: text, 
                    langpair: `${inputLang}|${outputLang}`,
                }
            });
            console.log(response.data);
            console.log(response.data.responseData.translatedText);
            setTranslatedText(response.data.responseData.translatedText);
        } catch(error) {
            console.error('Erro ao traduzir', error);
        }
    }
    return(
        <Container>
            <Title>Tradutor de línguas</Title>
                <div>
                    <Label>Língua de entrada</Label>
                    <select value={inputLang} onChange={(event) => {setInputLang(event.target.value)}}>
                        <option value="pt">Português</option>
                        <option value="en">English</option>
                        <option value="es">Español</option>
                        <option value="de">Deutsch</option>
                        <option value="it">Italiano</option>
                        <option value="fr">Français</option>
                    </select>
                </div>
                <div>
                    <Label>Língua de saída</Label>
                    <select value={outputLang} onChange={(event) => {setOutputLang(event.target.value)}}>
                        <option value="pt">Português</option>
                        <option value="en">English</option>
                        <option value="es">Español</option>
                        <option value="de">Deutsch</option>
                        <option value="it">Italiano</option>
                        <option value="fr">Français</option>
                    </select>
                </div>
                <input autoFocus type="text" value={text} onChange={(event) => {setText(event.target.value)}} placeholder='Digite um texto' />
                <button onClick={translateText}>Traduzir</button>
                {translatedText && <TranslatedText>{translatedText}</TranslatedText>}
        </Container>
    );
}
export default LangTranslate;