import React, { useState } from 'react';

export default function Like() {
  const [like, setLike] = useState(0);
  return (
    <div>
      <button onClick={() => setLike(like + 1)}>
        {like < 10 ? '👍' : '😎'}
      </button>
      <br />
      <span>{like}</span>
    </div>
  );
}
