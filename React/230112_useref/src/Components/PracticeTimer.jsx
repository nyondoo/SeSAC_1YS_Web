import React, { useEffect, useRef } from 'react'
import { useState } from 'react'

export default function PracticeTimer() {

    const [render, setRender] = useState(false);

    const timeLog = useRef(0);

    useEffect(()=> {
        const timer = setInterval(()=>{
          timeLog.current += 1;
          console.log(timeLog);
        }, 1000);
    
        return() => {
            clearInterval(timer);
        }    
    }, []) // 본 컴포넌트의 마운드, 업데이트, 언마운트 생애주기를 관리하는 훅
    // 기본적으로 마운트 될 때만 실행 됨. + return으로 언마운트 될 때 실행 될 함수도 선언
    // 본 컴포넌트가 마운트 되지 않으면 애초에 실행이 되지 않음.
    // 언마운트 된 후 실행될 함수는 타이머를 멈추는 것.
    // 언마운트 = 화면에서 사라짐 = 부모 컴포넌트인 ExUnmount에서 state값 condition이 false가 될 경우

  return (
    <div>
        <h1>{timeLog.current}</h1> {/* timeLog는 Ref기 때문에 값은 변하지만 리렌더되지 않음. 버튼 클릭 시에만 값을 보여주려면(렌더해주려면) state값을 변경시켜 리렌더시켜주면 된다. */}
        <button onClick={() => setRender(!render)}>시간</button> {/* 따라서 버튼 onClick함수에 state 변경함수를 넣어주면 버튼 클릭 시에만 Ref 값인 시간이 보여짐. */}
    </div>
  )
}
