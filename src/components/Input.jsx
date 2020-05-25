import React from 'react';

const Input = (props) => {
  return (
    <input type="text"
      className={props.className}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default Input;