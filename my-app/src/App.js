import React, { Component } from 'react'
import CounterHooks from './CounterHooks'
import CounterClass from './CounterClass'


export class App extends Component {
  render() {
    return (
      <div>
        <CounterClass/> <hr/>
        <CounterHooks/>
      </div>
    )
  }
}

export default App