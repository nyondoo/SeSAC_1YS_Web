import React from 'react'
import { useRef } from 'react'

export default function ChangeFocus() {
    const input1 = useRef();
    const input2 = useRef();

    const changeFocus1= () => {
        input1.current.focus();
    }

    const changeFocus2= () => {
        input2.current.focus();
    }

    return (
        <div>
            <input ref={input1} />
            <input ref={input2} />
            <br />
            <button onClick={changeFocus1}>1번</button>
            <button onClick={changeFocus2}>2번</button>
        </div>
  )
}
