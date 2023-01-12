import React from 'react'
import { useRef } from 'react';

export default function RefDom() {
    const orangeEl = useRef();
    const skyblueEl= useRef();
    const inputEl = useRef();

    const adjustCSS = () => {
        orangeEl.current.style.backgroundColor = 'orange';
        skyblueEl.current.style.backgroundColor = 'skyblue';
    };

    const clearInput = () => {
        inputEl.current.value = "";
    };

  return (
    <div>
        <h1 ref={orangeEl}>Orange</h1>
        <h1 ref={skyblueEl}>Skyblue</h1>
        <input ref={inputEl} />
        <br />
        <button onClick={adjustCSS}>CSS 적용하기</button>
        <button onClick={clearInput}>인풋 초기화</button>
    </div>
  )
}
