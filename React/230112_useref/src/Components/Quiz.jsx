import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';

export default function Quiz() {
    const number1 = Math.floor(Math.random() * 10);
    const number2 = Math.floor(Math.random() * 10);
    const arr = ['+', '-', '*'];
    const calc = Math.floor(Math.random() * 3); // 0~2 값 출력
    //const calc = arr[Math.round(Math.random() * (arr.length - 1))];

    let answer2 = 0;
        if (calc === 0) {
            answer2 = number1 + number2;
        } else if (calc === 1) {
            answer2 = number1 - number2;
        } else {
            answer2 = number1 * number2;
        }

    const answer = useRef();
    const [rerender, stateRerender] = useState(false); //초기값을 true/false로 줄 경우 이전 값과 상관없이 리렌더링 됨 

    const check = () => {
        // let answer2;
        // if (calc === '+') {
        //     answer2 = number1 + number2
        // } else if (calc === '-') {
        //     answer2 = number1 - number2
        // } else {
        //     answer2 = number1 * number2
        // }

        if (answer2 === Number(answer.current.value)) { // input value는 문자열 : 숫자형으로 바꿔줘야함
            alert("정답입니다!");
            answer.current.value = '';
            answer.current.focus();
            stateRerender(!rerender); //값이 무엇인지에 관계없이 값 변경(리렌더링)만 하면 되니까 state값을 boolean으로 주기. 변수 리렌더링 : 리렌더링 = 변수 재정의 = 값 변경
        } else {
            alert("틀렸습니다!");
            answer.current.value = '';
            answer.current.focus();
    }
}
    
    return (
        <div>
            <h1>{number1} {arr[calc]} {number2}</h1>
            <input ref={answer}/>
            <button onClick={check}>정답 제출</button>
        </div>
    )
}