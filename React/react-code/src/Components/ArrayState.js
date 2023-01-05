import React, { useState } from 'react';

export default function ArrayState() {
  const [state, setState] = useState([0]); // 값이 0인 배열을 선언 => Object타입 : 새로운 메모리 주소 생성
  console.log(state);

  return (
    <div>
      {state[0]}
      {/* // 인덱스 0번째 값 */}
      <br />
      <button
        onClick={() => {
          state[0] = 1; // state의 0번째 값을 1로 바꿔줌
          const copyArr = [...state]; //배열의 주소값이 아닌 실제 값을 가져오기 위해 전개연산자 사용.
          // 실제 copyArr는 state와 동일한 주소값을 가지기 때문에 전개연산자를 사용하지 않을 경우 변수를 불러올 때 변화가 없어 리렌더되지 않음
          setState(copyArr);
          //   setState(state);
          //   setState([1]); // 메모리 주소값을 바꿔줌
          console.log(state);
        }}
      >
        +1
      </button>
    </div>
  );
}

// State를 사용할 때 객체 사용 시 주의하기
