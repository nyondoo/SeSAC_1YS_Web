import React, { useState } from 'react'
import Item from './Item';

export default function ConditionalRender() {

    const [condition, setCondition] = useState('보여주기');

    const onChange = () => {
        condition === '보여주기' ? setCondition('감추기') : setCondition('보여주기');
    }

    const conditionalRender = condition === '감추기' && <Item /> //왼쪽 조건이 참일 때 컴포넌트 보여주기 거짓일 때 사라짐 

  return (
    <>
    {conditionalRender}
    <button onClick={onChange}>{condition}</button>
    </>
  )
}
