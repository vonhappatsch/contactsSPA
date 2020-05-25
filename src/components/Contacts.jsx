import React from "react";

import Label from './Label';
import Contact from './Contact';

const Contacts = (props) => {
  return (
    <div className="container" data-testid="contacts">
      <section className="contacts">
        <article className="contact">
          <Label className="contact__avatar"></Label>
          <Label className="contact__data">Nome</Label>
          <Label className="contact__data">Telefone</Label>
          <Label className="contact__data">País</Label>
          <Label className="contact__data">Admissão</Label>
          <Label className="contact__data">Empresa</Label>
          <Label className="contact__data">Departamento</Label>
        </article>
        { 
          props.contacts ?  props.contacts.map(contact => <Contact key={contact.id} data={contact} />) : null 
        }
      </section>
    </div>
  );
}

export default Contacts;
