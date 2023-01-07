import React from 'react'

export default function Profile(props) {

    // const [state, setState] = useState(0);

    // const obj = props.arr[state];

    // <button onClick={()=>{
    //     setState(state < 2 ? state + 1 : state = 0)
    // }}> 또는

    // 이벤트 함수를 따로 선언해서 넣어주기
    // function ChangeProfile() {
    //     if (state === props.arr.length -1) {
    //         setState(0);
    //     } else (
    //         setState(state + 1);
    //     )
    // }
    // <button onClick={ ChangeProfile }> 

  return (
    <div>
        <h1>{props.arr.name}</h1>
        <h2>{props.arr.age}</h2>
        <h2>{props.arr.nickName}</h2>
    </div>
    // <div>
    //     <h1>{obj.name}</h1>
    //     <h2>{obj.arr.age}</h2>
    //     <h2>{obj..arr.nickName}</h2>
    // </div>
  )
}
