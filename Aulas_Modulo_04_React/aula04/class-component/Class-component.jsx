import { Component } from "react";
class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }
    increase = () => {
        this.setState({counter: this.state.counter + 1});    
    }
    render() {
        return(
            <div>
                <h1>Copos de água: {this.state.counter}</h1>
                <button onClick={this.increase}>Beber</button>
            </div>
        )
    }
}
export default MyComponent;