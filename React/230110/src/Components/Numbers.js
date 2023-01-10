import React, { Component } from 'react'

export default class Numbers extends Component {
    state = {
        number : 0,
        setNumber : 0
    }
  render() {
    const { number } = this.state;
    return (
      <div>
        <h2>{number}</h2>
        <button onClick={ () => { 
            this.setState((prevState) =>{
                return { number : prevState.number + 2 }
            })
        }
        }> 
            +2 
        </button>
        <button onClick={ () => {
            this.setState((prevState) => {
                return { number : prevState.number - 1 }
            })
        } }> -1 </button>
      </div>
    )
  }
}
