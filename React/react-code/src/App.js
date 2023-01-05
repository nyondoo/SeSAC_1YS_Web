import logo from './logo.svg';
import './App.css';
// import { useState } from 'react';
import Ex1 from './Components/Ex1';
import Like from './Components/Like';
import ClassState from './Components/ClassState';
import StateAndVariable from './Components/StateAndVariable';
import ArrayState from './Components/ArrayState';
import ObjectState from './Components/ObjectState';

function App() {
  // let [teacher, setTeacher] = useState('이효석');
  // // 컴포넌트에서 state값을 변경하고 리렌더링 하기 위해서는 state변경함수를 사용해야 함.
  // // useState를 사용하지 않을 경우
  // // 1. 순수 JS 사용했을 때처럼 dom으로 요소를 찾아서 바꿔야 함 => react를 사용하는 의미 X
  // // 2. 변수만 바꾸게 될 경우 변수 값은 바뀌나 브라우저 상에서 변경된 컴포넌트가 리렌더 되지 않기 때문에 브라우저에서 변화가 없음.

  // function customSetTeacher() {
  //   setTeacher('tetz');
  //   // teacher = name;
  //   console.log(teacher);
  // }
  // // 변수 값은 바뀌나 state변경함수를 사용하지 않아 리렌더링이 안되기 때문에 화면상 변화가 없음

  return (
    <div className="App">
      <ObjectState />
    </div>
  );
}

export default App;
