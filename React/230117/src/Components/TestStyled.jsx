import React from 'react';
import styled from 'styled-components';

const Mydiv = styled.div`
  background-color: #ffeac8;
`;

const MyHeading = styled.h1`
  color: blue;
`;

const Myspan = styled.span`
  background-color: pink;
  font-weight: 700;
`;

export default function TestStyled() {
  return (
    <Mydiv>
      <MyHeading>h1 태그입니다</MyHeading>
      <Myspan>span 태그입니다</Myspan>
    </Mydiv>
  );
}
