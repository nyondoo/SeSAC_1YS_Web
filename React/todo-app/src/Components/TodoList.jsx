import React from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // store에서 할 일 목록을 받아오기 위함 useSelector는 state의 상태값을 받아오기 위한 모듈
import { create, done } from '../store/modules/todo'; // 스토어에서 정의한 액션함수 임포트
//액션을 전달하기 위한 디스패치도 임포트

export default function TodoList() {
  const inputRef = useRef();
  const list = useSelector((state) => state.todo.list).filter(
    (el) => el.done === false
  ); //useSelector()은 Store의 State값을 받아오기 위해 사용.
  //콜백함수로 값 전달.
  //매개변수 state는 store에 저장되어있던 상태값을 받아옴.
  //src/index.js의 Provider 컴포넌트의 store속성으로 준 const store = configureStore({ reducer: rootReducer });의 상태값 = 통합 리듀서
  //화살표 뒤는 받아온 상태값을 활용.
  //통합 스토어 중 todo의 list라는 키 값 배열 중 done의 값이 false인 것을 받아옴.

  const nextID = useSelector((state) => state.todo.nextID);

  const dispatch = useDispatch();

  return (
    <section>
      <h1>할 일 목록</h1>
      <div>
        <input type="text" ref={inputRef} />
        <button
          onClick={() => {
            dispatch(create({ id: nextID, text: inputRef.current.value }));
            inputRef.current.value = '';
          }}
        >
          추가
        </button>
      </div>
      <br />
      <ul>
        {list.map((el) => {
          return (
            <li key={el.id}>
              {el.text}
              <button
                onClick={() => {
                  dispatch(done(el.id));
                }}
              >
                완료
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
