import React from 'react';
import InputBox from '../InputBox/InputBox';
import MessageBox from '../MessageBox/MessageBox';
import './Chat.css';

export default function Chat() {
  return (
    <div className="chatPage">
      <MessageBox />
      <InputBox />
    </div>
  );
}
