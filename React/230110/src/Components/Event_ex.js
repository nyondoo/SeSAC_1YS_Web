import React, { useState } from 'react'

export default function Event_ex() {

    const [username, setUsername] = useState("");
    const [useremail, setUseremail] = useState("");

    const [info, setInfo] = useState([
        {name:"코디", email:"codi@gmail.com"},
        {name:"윤소희", email:"yoonsohee@gmail.com"}
    ])
//         {name : username, email : useremail}
    const register = () => {
        setInfo(info.concat({name:username, email:useremail}));
        setUsername("");
        setUseremail("");
    }

  return (
    <div>
        <input
            placeholder='이름'
            type="text"
            name='name'
            value={username}
            onChange={(event) => setUsername(event.target.value)}
        ></input>

        <input
            placeholder='이메일'
            type="text"
            name='email'
            value={useremail}
            onChange={(e) => setUseremail(e.target.value)}
        ></input>

        <button onClick={register}>등록</button>

        {info.map((element, i) => { return <h1 key={i}>{element.name} : {element.email}</h1> })}
    </div>
  )
}
