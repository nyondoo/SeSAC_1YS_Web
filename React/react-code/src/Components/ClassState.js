import React, { Component } from 'react';

export default class ClassState extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       teacher: '이효석',
  //     };
  //   }
  state = {
    teacher: '이효석',
  };

  render() {
    // 구조분해할당으로 불러오기
    const { teacher } = this.state;
    return (
      <div>
        {/* state변경함수는 setState로 고정 */}
        <button onClick={() => this.setState({ teacher: 'tetz' })}>
          영어로!
        </button>
        <br />
        <span>{teacher}</span>
      </div>
    );
  }
}
