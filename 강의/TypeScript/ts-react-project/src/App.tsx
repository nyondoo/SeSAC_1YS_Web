import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';

const showAlert = () => {
  alert("alert");
}
function App() {
  return (
    <div>
      <Button onClick={showAlert}>버튼</Button>
    </div>
  );
}

export default App;
