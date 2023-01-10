import React, { useState } from 'react'

export default function InDe() {
    const [ number, setNumber ] = useState(0);

    const Increase = () => {
        setNumber(number + 1);
    }
    const Decrease = () => {
        setNumber(number - 2);
    }

  return (
    <div>
        <h2>{number}</h2>
        <button onClick={Increase}> +1 </button>
        <button onClick={Decrease}> -2 </button>
    </div>
  )
}
