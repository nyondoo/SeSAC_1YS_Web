import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Test() {
  const weight = useSelector((state) => state); //콜백으로 받아온 state값을 그대로 return **state는 return 되면 weight로 들어감.
  const dispatch = useDispatch();

  return (
    <>
      <h1>당신의 몸무게는 {weight} 입니다</h1>
      <button
        onClick={() => {
          dispatch({ type: '증가' });
        }}
      >
        살 찌기
      </button>
      <button
        onClick={() => {
          dispatch({ type: '감소' });
        }}
      >
        살 빼기
      </button>
    </>
  );
}
