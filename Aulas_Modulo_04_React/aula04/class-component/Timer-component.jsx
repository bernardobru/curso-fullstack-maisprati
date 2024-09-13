import { Component } from "react";
class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    //Faz a montagem
    componentDidMount() {
        //Cria um intervalo que a cada 1 segundo, chama a função setState()
        this.timerId = setInterval(() => {
            this.setState(prevState => ({
                count: prevState.count + 1
            }))
        }, 1000);
    }
    componentDidUpdate() {
        console.log(`O componente foi atualizado para: ${this.state.count} `);
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
        console.log('Timer Limpo');
    }
    render() {
        return(
            <>
                <h1>Contador crescente</h1>
                <p>{this.state.count}</p>
            </>
        );
    }
}
export default Timer;