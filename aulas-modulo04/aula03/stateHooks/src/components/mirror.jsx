import { useState } from 'react';
function Mirror() {
    const [mirror, setMirror] = useState('');
    return (
        <div>
            <input type='text' onChange={(evento) => setMirror(evento.target.value)}/>
            <p>{mirror}</p>
        </div>
    )
}
export default Mirror;