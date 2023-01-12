import React from 'react'
import { useEffect } from 'react'

export default function Timer() {

    useEffect(()=> {
        const timer = setInterval(()=>{
            console.log('타이머 실행 중');
        }, 1000);

        return(() => { // 이 리턴은 리액트 hook
            clearInterval(timer); // setInterval 함수를 인자로 받아와서 그 함수를 멈춤.
        });
    }, []);

  return (
        <h1>타이머가 실행중입니다!</h1>
  )
}
