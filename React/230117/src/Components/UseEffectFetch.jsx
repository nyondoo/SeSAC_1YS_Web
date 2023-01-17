import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import ProfileComponent from './ProfileComponent';

export default function UseEffectFetch() {
    const [dataArr, setDataArr] = useState([]);//useEffect가 실행되는 시점 = return을 그린 후 실행 됨 => dataArr.map()은 undefined 값에서 실행할 수 없음. 따라서 state 초깃값으로 빈 배열[]을 주면 된다. = 초깃값을 잘 설정하자

    async function fetchData() {
        const resFetch = await axios.get('http://localhost:8080');
        
        if(resFetch.status !== 200) return alert('통신 에러');//if else 말고 if문의 예외처리를 return으로 하는 방식. return을 만나면 실행 종료

        const data = await resFetch.data;
        setDataArr(data);
        console.log(data);
    } 

//useEffect 내부에서 함수를 작성하는 것이 아니라 함수를 선언하고 사용하기
    useEffect(() => {fetchData();}, [])

  return (
    <>
        {dataArr.map((el, i) => {
            return <ProfileComponent key={i} name={el.name} age={el.age} nickNmae={el.nickNmae} />
        })}
    </>
  )
}
// {}와 return만 쓴다면 생략가능