import React from 'react';
import jlcDoll from '../jlc.png'; // /src폴더에 이미지 파일 넣고 임포트 하기

export default function Image() {
  return (
    <>
      <img src="/images/jlc.png" alt="젤리캣" />
      <img src={jlcDoll} alt="젤리캣" />
    </>
  );
}
// JSX문법 내에서 public폴더는 기본적으로 static으로 잡힘. '/' = public
// 내부참조 할 경우 /src 폴더 밖으로 갈 수 없음. /src 폴더 안에서만 참조 가능.
