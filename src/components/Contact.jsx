import React from 'react';

import Avatar from './Avatar';
import ContactInfo from './ContactInfo';

const Contact = (props) => {
  const { data } = props;

  const formatDate = new Intl.DateTimeFormat('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit' });
  const [{ value: yyyy },,{ value: mm },,{ value: dd }] = formatDate.formatToParts(new Date(data.admissionDate));

  return (
    <article className="contact" data-testid="contact">
        <Avatar className="contact__avatar" data-testid="contact-avatar"> 
          <img src={data.avatar} alt={data.name} />
        </Avatar>
        <ContactInfo className="contact__data" data-testid="contact-name">
          {data.name}
        </ContactInfo>
        <ContactInfo className="contact__data" data-testid="contact-phone">
          {data.phone}
        </ContactInfo>
        <ContactInfo className="contact__data" data-testid="contact-country">
          {data.country}
        </ContactInfo>
        <ContactInfo className="contact__data" data-testid="contact-date">
          {`${dd}/${mm}/${yyyy}`}
        </ContactInfo>
        <ContactInfo className="contact__data" data-testid="contact-company">
          {data.company}
        </ContactInfo>
        <ContactInfo className="contact__data" data-testid="contact-department">
          {data.department}
        </ContactInfo>
      </article>
  );
}

export default Contact;
