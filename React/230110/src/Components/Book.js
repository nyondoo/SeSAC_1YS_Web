import React from 'react'
import bookcover from '../BitterSweet.jpg'

export default function Book({ title, author, price, type }) {
  return (
    <div>
        <img src={bookcover}></img>
        <h3>{title}</h3>
        <br />
        <div>저자 : {author}</div>
        <div>판매가 : {price}원</div>
        <div>구분 : {type}</div>
    </div>
  )
};

Book.defaultProps = {
    title : "등록된 책이 없습니다.",
    author : "작가 미상",
    price : "가격 미상",
    type : "분류 없음"
}

