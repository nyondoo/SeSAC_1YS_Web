import React from 'react'
import ListChild from './ListChild'
import Modal from './Modal'

export default function List() {
  const dataArr = [
    {
      title: "리액트 공부하기",
      content: "스테이트 활용법 익히기"
    },
    {
      title: "코테 문제 풀기",
      content: "레벨0 정복"
    },
    {
      title: "변경 확인",
      content: "변경사항"
    }
  ]

  return (
    <div>
        <h1>오늘 해야 할 일</h1>
        <hr />
        {dataArr.map((el, index) => { // return 뒤에 함수정의밖에 없는 경우에는 {return } 생략가능 
          // return <ListChild title={el.title} content={el.content} key={index}/> // 배열의 길이만큼 순회, 형제요소간에 unique한 키 값을 props로 부여
          return (
            <div key={index}>
              <h2>{el.title}</h2>
              <p>{el.content}</p>
              <hr />
            </div>
          )
        })}
    </div>
  )
}
