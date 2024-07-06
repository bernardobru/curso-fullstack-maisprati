import { useState } from "react";
function Timer() {
    const [timer, setTimer] = useState(1200);
    setInterval(() => {setTimer(timer - 1)}, 1000)
    return (
        <div>{timer}</div>
    )
}
export default Timer;   