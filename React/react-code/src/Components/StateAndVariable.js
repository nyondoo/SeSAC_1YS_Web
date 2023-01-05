import React, { useState } from 'react';

export default function StateAndVariable() {
  const [state, setState] = useState(0);
  let variable = 0;

  function setVariable() {
    variable += 1;
    console.log(`state: ${state} / variable: ${variable}`);
  }

  return (
    <div>
      {state} / {variable}
      <br />
      <button
        onClick={() => {
          setState(state + 1);
          setVariable();
        }}
      >
        +1
      </button>
    </div>
  );
}
// 변수 variable은 변하지 않음 : onClick실행할 때마다 컴포넌트가 리렌더링 되어 let variable = 0으로 재정의되기 때문.
// state 값은 전체 html페이지를 새로고침 하지 않는 이상 변화값이 저장됨.
