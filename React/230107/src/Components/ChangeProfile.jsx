import React from 'react'
import { useState } from 'react'
import Profile from './Profile'

export default function ChangeProfile() {
    const profile = [
        {
            name: "뽀로로",
            age: "5",
            nickName: "사고뭉치"
        },
        {
            name: "루피",
            age: "4",
            nickName: "요리왕"
        },
        {
            name: "크롱",
            age: "3",
            nickName: "악어"
        }
    ]

    //state는 자식 컴포넌트에서 작성해도 됨
    let [state, setState] = useState(0);
    /// 삼항연산자 사용때문에 let으로 선언하게됨. => if문 사용
    return (
    <div>
        <Profile arr={profile[state]}/>
        <button onClick={()=>{
            setState(state < 2 ? state + 1 : state = 0)
        }}>
            프로필 변경
        </button>
    </div>
  )
}
