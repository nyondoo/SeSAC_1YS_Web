import React, { Component } from 'react'
import jlc from "../jlc.png"

export default class Test2 extends Component {
  render() {
    const style = {color: "orange", fontSize: "40px", marginTop: "20"};

    return (
      <div style={style}>
        <h2>안녕하세요</h2>
        <img src={jlc}></img>
      </div>
    )
  }
}
