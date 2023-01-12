import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

export default function TestRef() {
    const [text, setText] = useState("안녕하세요");

    const inputValue = useRef(); // input태그를 useRef()가 참조

    function onChangeText() {
        console.log(inputValue);
        setText(inputValue.current.value);
    }
  return (
    <div>
        <h1>{text}</h1>
        <input
        ref={inputValue} 
        onChange={() => { onChangeText() }} />
    </div>
  )
}
