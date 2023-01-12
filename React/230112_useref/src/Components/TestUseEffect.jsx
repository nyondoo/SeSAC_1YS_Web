import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function TestUseEffect() {

    const [count, setCount] = useState(0);
    const [text, setText] = useState('입력하세요');
    const inputValue = useRef();

    const onInputChange = () => {
        console.log("🖊️키 입력");
        setText(inputValue.current.value);
    }

    const onButtonClick = () => {
        console.log('클❤️릭');
        setCount(count + 1);
    };

    useEffect(()=> {
        console.log('🐸렌더링 될 때마다 실행');// 인자 하나만 주면 컴포넌트가 마운트 될 때, 업데이트 될 때 모두 실행
    });

    useEffect(()=> {
        console.log('🚀마운트 될 때만 실행');
    }, []);// 배열 내부의 값이 변경되었을 때만 첫 인자인 익명함수 실행; 빈 배열 = 변경될 값이 없음 = 업데이트 될 때 실행 X = 마운트될 때만 실행

    useEffect(()=> {
        console.log('🎇버튼이 클릭될 때만 실행');
    }, [count, text]);//버튼을 클릭하면 count값이 바뀜. = count값이 업데이트 되었을 때만 실행 = 마우스 클릭시에만 실행

    // useEffect(()=> {
    //     console.log('⌨️키 입력 시에만 실행');
    // }, [text]);

    

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={onButtonClick}>+1 버튼</button>
        <br />
        <hr />
        <br />
        <h1>{text}</h1>
        <input ref={inputValue} onChange={onInputChange}/>
    </div>
  )
}
