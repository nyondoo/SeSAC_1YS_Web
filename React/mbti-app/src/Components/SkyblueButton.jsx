import React from 'react';
import Button from './Button';

export default function SkyblueButton({ text, clickEvent }) {
  return (
    <Button
      text={text}
      clickEvent={clickEvent}
      mainColor="#7edcfa"
      subColor="#3a82e0"
      hoverColor="#cfecf2"
    />
  );
}
