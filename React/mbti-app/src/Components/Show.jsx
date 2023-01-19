import React from 'react';
import styled from 'styled-components';
import OrangeButton from './OrangeButton';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../store/modules/mbti';

const Header = styled.p`
  font-size: 3em;
`;

const Explaination = styled.p`
  font-size: 1.5em;
  color: gray;
`;

const Result = styled.p`
  font-size: 3em;
  color: dodgerblue;
`;

const Additional = styled.p`
  font-size: 2em;
  color: orange;
`;

const AdditionalImg = styled.img`
  width: 500px;
  transform: translateX(-35px);
`;

export default function Show() {
  const result = useSelector((state) => state.mbti.mbtiResult); // 완성된 MBTI 문자열
  const explaination = useSelector((state) => state.mbti.explaination[result]);
  const dispatch = useDispatch();

  return (
    <>
      <Header>당신의 개발자 MBTI 결과는?</Header>
      <Explaination>{explaination.text}</Explaination>
      <Result>{result}</Result>
      <Additional>이건 재미로 읽어보세요</Additional>
      <AdditionalImg src={explaination.img} alt="팩폭" />
      <OrangeButton text="다시 검사하기" clickEvent={() => dispatch(reset())} />
    </>
  );
}
