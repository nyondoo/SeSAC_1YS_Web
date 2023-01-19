import React from 'react';
import styled from 'styled-components';
import SkyblueButton from './SkyblueButton';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { check, next } from '../store/modules/mbti';

const SurveyQuestion = styled.p`
  font-size: 1.5em;
  color: gray;
`;

const VS = styled.p`
  font-size: 1em;
`;

export default function Mbti() {
  const survey = useSelector((state) => state.mbti.survey);
  const page = useSelector((state) => state.mbti.page);
  const dispatch = useDispatch();

  return (
    <>
      <SurveyQuestion>{survey[page - 1].question}</SurveyQuestion>
      <ul>
        {survey[page - 1].answer.map((el, i) => {
          return (
            <li key={i}>
              <SkyblueButton
                text={el.text}
                clickEvent={() => {
                  dispatch(check(el.result));
                  dispatch(next());
                }}
              />
              {i === 0 && <VS>VS</VS>}
            </li>
          );
        })}
      </ul>
    </>
  );
}
