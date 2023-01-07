import React from 'react'

export default function CustomList(props) {
  return (
    <ul>
        {props.arr?.map((el) => <li key={el}>{el}</li>)}
    </ul>
  )
  // arr? => arr의 값이 있으면 메소드 실행, 없으면 실행 X
}
