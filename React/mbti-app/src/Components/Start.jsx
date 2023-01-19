import React from 'react';
import styled from 'styled-components';
import OrangeButton from './OrangeButton';
import { useDispatch } from 'react-redux';
import { next } from '../store/modules/mbti';

const Header = styled.p`
  font-size: 3em;
`;

const MainImg = styled.img`
  width: inherit;
`;

const SubHeader = styled.p`
  font-size: 1.5em;
  color: gray;
`;

export default function Start() {
  const dispatch = useDispatch();
  return (
    <>
      <Header>개발자 MBTI 조사</Header>
      <MainImg src="/images/main.jpg" alt="메인이미지"></MainImg>
      <SubHeader>개발자가 흔히 접하는 상황에 따른 MBTI를 알아봅시다!</SubHeader>
      <OrangeButton
        text="테스트 시작"
        clickEvent={() => {
          dispatch(next());
        }}
      />
    </>
  );
}
