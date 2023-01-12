import React from 'react'
import { useState } from 'react'
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';

export default function ConditionnalEx() {

    const [condition, setCondition] = useState(1);

    const onChange = () => {
        condition === 1 ? setCondition(2) : setCondition(1)
    }

    // const conditionalRender = condition === 1 && <ComponentOne name={1}/> || condition === 2 && <ComponentTwo name={2}/>;
    // const conditionalRender = condition === 1 ? <ComponentOne name={1}/> : <ComponentOne name={2}/>;
    // const conditionalRender = condition === 1 ? <ComponentOne name={condition}/> : <ComponentTwo name={condition}/>;
    const conditionalRender = <ComponentOne name={condition}/>;

  return (
    <>
    {conditionalRender}
    <button onClick={onChange}>{condition}번</button>
    </>
  )
}
