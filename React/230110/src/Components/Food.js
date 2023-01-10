import React from 'react'

export default function Food(props) {

    const { food } = props;
    
  return (
    <div>
        <div>제가 좋아하는 음식은<span style={{color: "red"}}>{food}</span>입니다.</div>
    </div>
  )
};

Food.defaultProps = {
    food : '한국인은 밥심'
};
