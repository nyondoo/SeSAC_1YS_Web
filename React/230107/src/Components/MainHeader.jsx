import React from 'react'

// props = {
//     text : 'Go Naver',
    // href : "http://naver.com"
    // userID : "nyondoo"
// }

export default function MainHeader(props) { // PROPS에서 객체로 받아온 것을 구조분해할당으로 사용
    const obj = {
        str: "test",
        num: 10
    }

    const { str, num } = obj // 키 str은 str이라는 변수로, 키 num은 num이라는 변수로 선언하겠다

    console.log(str);
    console.log(num);

    const { text, href, userID } = props; //구조분해할당
    return (
    <div>
        <h1>{userID}님 반갑습니다!</h1>
        <a href={href}>{text}</a> 
    </div>
  )
}
