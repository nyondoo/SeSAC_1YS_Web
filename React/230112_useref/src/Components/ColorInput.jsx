import React from 'react'
import { useRef } from 'react'

export default function ColorInput() {
    const inputColor = useRef();
    const background = useRef();
    
    const changeColor = () => {
        background.current.style.backgroundColor = inputColor.current.value
    }

  return (
    <div ref={background}>
        <input ref={inputColor}/>
        <br />
        <button onClick={changeColor}>색 적용</button>
    </div>
  )
}
