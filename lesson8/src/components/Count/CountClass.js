import { Component } from "react";

class CountClass extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    handleIncrement = () => {
        this.setState({count: this.state.count + 1})
    }
    handleDecrement = () => {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleIncrement}>increment</button>
                <button onClick={this.handleDecrement}>decrement</button>
            </div>
        )
    }
}

export default CountClass