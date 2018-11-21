import React from 'react';

export default function Bar(props) {
  return (
    <>
      <h2>Bar</h2>
      <button type="button" onClick={props.onClick}>
        Click
      </button>
    </>
  );
}
