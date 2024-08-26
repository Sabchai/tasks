/*1st challenge done already*/
import React, { Component } from 'react';

export class CounterClass extends Component {
    constructor() {
        super();
        this.state = {
            counter: 10
        };
    }

    increment = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    decrement = () => {
        if (this.state.counter > 0) {
            this.setState({ counter: this.state.counter - 1 });
        }
    }

    reset = () => {
        this.setState({ counter: 0 });
    }

    render() {
        return (
            <div>
                <h1>CounterClass</h1>
                <button onClick={this.increment}>plus</button>
                <button onClick={this.decrement}>moins</button>
                <button onClick={this.reset}>reset</button>
                <p>Counter: {this.state.counter}</p>
            </div>
        );
    }
}

export default CounterClass;
