import React, { useState } from 'react'

export default function Say() {

    const [ message, SetMessage ] = useState("");
    const onClickEnter = () => SetMessage( "안녕하세요!" );
    const onClickLeave = () => SetMessage( "안녕히가세요!" );
    
    const [ color, SetColor ] = useState({color : 'black'});
    const onClickRed = () => SetColor( {color: "red"} );
    const onClickBlue = () => SetColor( {color: "blue"} );
    const onClickOrange = () => SetColor( {color: "orange"} );

  return (
    <div>
        <button onClick={onClickEnter}>입장</button>
        <button onClick={onClickLeave}>퇴장</button>
        <h1 style={color}>{ message }</h1>
        <button style={{color: "red"}} onClick={onClickRed}>빨간색</button>
        <button style={{color: "blue"}} onClick={onClickBlue}>파란색</button>
        <button style={{color: "orange"}} onClick={onClickOrange}>주황색</button>
        
    </div>
  )
}
