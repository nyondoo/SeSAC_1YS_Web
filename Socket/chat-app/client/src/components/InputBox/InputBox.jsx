import React from 'react';
import './InputBox.css';

export default function InputBox() {
  return (
    <form className="form">
      <input
        className="inputBox"
        type="text"
        placeholder="메세지를 입력하세요."
      />
    </form>
  );
}
