import React from 'react';
import './MessageBox.css';

export default function MessageBox() {
  const msgArr = ['msg1', 'msg2', '메세지1', '메세지2'];
  return (
    <div className="ChatBox">
      {msgArr.map((el, i) => {
        return (
          <>
            <span className="MessageBox" key={i}>
              {el}
            </span>
            <br />
          </>
        );
      })}
    </div>
  );
}
