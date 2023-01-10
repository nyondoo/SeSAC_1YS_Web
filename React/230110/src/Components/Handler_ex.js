import React, { Component } from 'react'

export default class Handler_ex extends Component {
    state = {
        message : "Hello World!"
    }
    
  render() {
    const {message} = this.state;

    return (
      <div>
        <h1>{message}</h1>
        <br />
        <button onClick={() => this.setState({message : "Goodbye World!"})}>클릭</button>
      </div>
    )
  }
}
