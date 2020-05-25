import React from 'react';

const Avatar = (props) => {
  return (
    <span {...props}>
      {props.children}
    </span>
  );
}

export default Avatar;