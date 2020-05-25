import React from 'react';

import Button from './Button';
import Input from './Input';
import Icon from './Icon';

const Filters = (props, menuItem) => {
  return (
    <div className="container" data-testid="filters">
      <section className="filters">
        <div className="filters__search">

          <Input type="text"
            className="filters__search__input"
            placeholder="Pesquisar"
            value={props.value}
            onChange={props.onChange}
          />

          <Button className="filters__search__icon">
            <Icon className="fa fa-search" />
          </Button>
        </div>

        <Button
          className={`filters__item ${menuItem === "name"}`}
          onClick={(event) => props.sortContacts(event, "name")}
        >
          Nome <Icon className="fas fa-sort-down" />
        </Button>

        <Button className={`filters__item ${menuItem === "country"}`}
          onClick={(event) => props.sortContacts(event, "country")}
        >
          País <Icon className="fas fa-sort-down" />
        </Button>

        <Button className={`filters__item ${menuItem === "company"}`}
          onClick={(event) => props.sortContacts(event, "company")}
        >
          Empresa <Icon className="fas fa-sort-down" />
        </Button>

        <Button className={`filters__item ${menuItem === "department"}`}
          onClick={(event) => props.sortContacts(event, "department")}
        >
          Departamento <Icon className="fas fa-sort-down" />
        </Button>

        <Button className={`filters__item ${menuItem === "admissionDate"}`}
          onClick={(event) => props.sortContacts(event, "admissionDate")}
        >
          Data de admissão <Icon className="fas fa-sort-down" />
        </Button>
      </section>
    </div>
  );
}

export default Filters;
