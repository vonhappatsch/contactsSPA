import React from 'react';

const Label = (props) => {
  return (
    <span className={props.className}>
      {props.children}
    </span>
  );
}

export default Label;