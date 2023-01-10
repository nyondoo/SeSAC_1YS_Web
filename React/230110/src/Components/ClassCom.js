import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ClassCom extends Component {
  render() {
    const { text, valid } = this.props;
    return (
      <div>
        <h1>{text}</h1>
        <br />
        <button onClick={ () => {console.log(valid)} }>콘솔 메세지</button>
      </div>
    )
  }
}

ClassCom.defaultProps = {
    text: "이건 기본 text props입니다."
}

ClassCom.propTypes = {
    text: PropTypes.string
}

