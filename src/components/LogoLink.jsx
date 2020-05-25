import React from 'react';

const LogoLink = (props) => {
  return (
    <a href={props.url} className={props.className} 
      title={props.title}>
      {props.children}
    </a>
  );
}

export default LogoLink;