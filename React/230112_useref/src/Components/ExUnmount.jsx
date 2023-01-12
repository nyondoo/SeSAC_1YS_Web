import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import PracticeTimer from './PracticeTimer';

export default function ExUnmount() {

    const [condition, setCondition] = useState(false); // 컴포넌트 PracticeTimer의 실행(보이기, 마운트)를 결정하는 조건

  return (
    <div>
        {condition && <PracticeTimer />} {/* state값 condition이 true일 때 PracticeTimer를 마운트 시킴.*/}
        <button onClick={()=>setCondition(!condition)}>{condition ? '숨기기' : '보이기'}</button>
    </div>
  )
}
