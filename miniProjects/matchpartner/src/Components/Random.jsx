import React from 'react';
import { useState } from 'react';
import { setConstantValue } from 'typescript';
import MatchCoLeader from './MatchCoLeader';
import MatchLeader from './MatchLeader';

export default function Random() {
    const [leaderArr, setLeaderArr] = useState([
        {le: '양상훈', cole: '지예은'},
        {le: '하지현', cole: '남경일'},
        {le: '류지우', cole: '김해든'},
        {le: '박서연', cole: '정유진'}
    ]);

    function match() {
        const copyLeader = [...leaderArr];
        setLeaderArr(copyLeader.sort(() => Math.random() - 0.5));
        console.log(leaderArr);
        console.log(coLeaderArr);
    }

    return (
        <>
            <h1>나는 누구랑 원투원을 하게 될까?</h1>
            <br />
            <button onClick={match}>GO</button>
            <br />
            <div>
                <span>{leaderArr.map((el) => el❤️‍🔥)}</span>
            </div>
        </>
    );
  }

//   <br />
//   <span>{leaderArr[1]}</span>
//   ❤️‍🔥
//   <span>{coLeaderArr[1]}</span>
//   <br />
//   <span>{leaderArr[2]}</span>
//   ❤️‍🔥
//   <span>{coLeaderArr[2]}</span>
//   <br />
//   <span>{leaderArr[3]}</span>
//   ❤️‍🔥
//   <span>{coLeaderArr[3]}</span>