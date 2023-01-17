import React from 'react';

export default function InllineCss() {
    const divStyle = {
        backgroundColor: "lightgreen"
    };

    const headingStyle = {
        backgroundColor: "lightpink",
        fontWeight: '700',
    };

    const spanStyle = {
        backgroundColor: "skyblue",
        fontWeight: '700'
    };

  return <div style={divStyle}>
    <h1 style={headingStyle}>CSS Test 컴포넌트입니다.</h1>
    <span style={spanStyle}>해당 컴포넌트를 CSS로 꾸며보아요</span>
  </div>;
}
