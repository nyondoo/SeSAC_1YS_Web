import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

export default function Comparing() {
    const [countState, setCountState] = useState(0);
    const countRef = useRef(0);
    let countVar = 0;

    const [render, setRender] = useState(false);

    const countUpState = () => {
        setCountState(countState + 1);
        console.log('State : ', countState);
    };

    const countUpRef = () => {
        countRef.current = countRef.current + 1 //input에 접근할 때만 ref.current.value로 접근, 변수로 사용 시 current까지 접근
        console.log('Ref : ', countRef.current);
    };

    const countUpVar = () => {
        countVar += 1;
        console.log('Var : ', countVar);
    };

    const reRender = () => {
        setRender(!render);
    };

  return (
    <div>
        <h1>State : {countState}</h1>
        <h1>Ref : {countRef.current}</h1>
        <h1>Var : {countVar}</h1>
        <br />
        <button onClick={countUpState}>State UP</button>
        <button onClick={countUpRef}>Ref UP</button>
        <button onClick={countUpVar}>Var UP</button>
        <button onClick={reRender}>렌더링</button>
    </div>
  )
}
