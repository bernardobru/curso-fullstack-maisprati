import { useState } from "react";
import styled from 'styled-components';
import { QRCodeSVG } from 'qrcode.react'; 
function QRCodeGenerator() {
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #eeeeee;
        border-radius: 1em;
        padding: 2em;
    `;
    const Title = styled.h1`
        text-align: center;
        font-size: 2em;
    `;
    const Title2 = styled.h2`
        text-align: center;
        font-size: 1.25em;
    `;
    const QR = styled.div`
        border: 1px solid;
    `;
    const Input = styled.input`
        border: none;
        background-color: #dedede;
        margin: 1em;
        padding: 1em;
        border-radius: 1em;
    `;
    const [text, setText] = useState('');
    const [size, setSize] = useState(0);
    return(
        <>
            <Container>
                <Title>Gerador de QR Code</Title>
                <Title2>Insira aqui um texto para que se transforme em QR Code</Title2>
                <Input autoFocus type="text" value={text} onChange={(e) => {setText(e.target.value)}} />
                <Title2>Insira o tamanho em px</Title2>
                <Input autoFocus type="number" value={size} onChange={(e) => {setSize(e.target.value)}}/>
                {text && (
                    <QR>
                        <QRCodeSVG value={text} size={size}/>
                    </QR>
                )}
            </Container>
        </>
    );
}
export default QRCodeGenerator;