import React from 'react';

const ContactInfo = (props) => {
  return (
    <span {...props}>
      {props.children}
    </span>
  );
}

export default ContactInfo;