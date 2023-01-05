// rfc -> 스니펫

import { useState } from 'react';

export default function Ex1() {
  let [num, setNum] = useState(1);
  // state 문법 : [state 이름, state변경함수] = useState(초기값)
  return (
    // return 요소 안에는 하나의 부모요소로 컴포넌트가 감싸져있어야 함. (최상위 요소가 두개 이상이면 안됨)
    <div>
      <span>{num}</span>
      <br />
      <button onClick={() => setNum(num - 1)}>-</button>
      <button onClick={() => setNum(num + 1)}>+</button>
      {/* 익명함수 정의 후 state변경함수 사용해주기 (그렇지 않을 경우 무한렌더링)
      () => state변경함수(변경할 값) */}
    </div>
  );
}

// export default Ex1;
