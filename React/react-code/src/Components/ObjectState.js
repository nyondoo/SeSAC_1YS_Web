import React, { useState } from 'react';

export default function ObjectState() {
  const [state, setState] = useState({ teacher: '이효석' });
  console.log(state);

  return (
    <div>
      <button
        onClick={() => {
          state.teacher = 'tetz';
          const copyObj = { ...state };
          //   객체형태에 state를 사용할 경우에는 전개연산자를 사용해서 state의 초기값을 가져와 새로운 객체를 만들어주는 형태로 사용
          setState(copyObj);
          console.log(state);
        }}
      >
        영어로!
      </button>
      <br />
      <span>{state.teacher}</span>
    </div>
  );
}
