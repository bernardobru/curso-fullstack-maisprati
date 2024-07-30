import axios from "axios";
import { useState } from "react";
function IPFinder() {
    const [ip, setIp] = useState('');
    const [ipData, setIpData] = useState(null);
    const findIp = async () => {
        try {
            const response = await axios.get(`https://ipinfo.io/${ip}/json`);
            setIpData(response.data);
        } catch(error) {
            console.error('Deu erro:', error);
        }
    }
    return(
        <>
            <h1>Achar endereço IP</h1>
            <input type="text" value={ip} autoFocus onChange={(e) => {setIp(e.target.value)}} placeholder="Endereço IP"/>
            <button onClick={findIp}>Achar IP</button>
            {ipData && (
                <div>
                    <h3>IP:</h3>
                    <p>{ipData.ip}</p>
                    <h3>Local:</h3>
                    <p>{ipData.city}, {ipData.region}, {ipData.country}</p>
                    <h3>Organização</h3>
                    <p>{ipData.org}</p>
                </div>
            )}
        </>
    );
}
export default IPFinder;