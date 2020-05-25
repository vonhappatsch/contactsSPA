import React from 'react';

import './App.scss';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      loading: true,
      updatedContacts: [],
      event: null,
      sortedContacts: false
    }
  }

  async componentDidMount() {
    await fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
      .then(response => response.json())
      .then(data => {
        this.setState({ 
          contacts: data,
          loading: false
        });
        this.setState({ updatedContacts: this.state.contacts });
      })
      .catch(err => {
        console.log(`There was the following error when fetching the API: ${err}`);
      })
  }

  handleNameChange = e => {
    let filteredNames = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(e.target.value.toLowerCase()));
    this.setState({ updatedContacts: filteredNames });
  }
  
  sortContacts = (event, menuItem) => {
    this.setState({ event: event.target });
    
    if (!this.state.sortedContacts && this.state.event !== event.target) {
      let sortedContactsDown = this.state.contacts.sort((a, b) => a[menuItem].localeCompare(b[menuItem]));
      this.setState({
        updatedContacts: sortedContactsDown,
        sortedContacts: true,
      });
      event.target.classList.add("is-selected");
    }

    if (this.state.event) this.state.event.classList.remove("is-selected");
    
    if (this.state.sortedContacts && this.state.event === event.target) {
      event.target.classList.add("is-selected");
      let sortedContactsUp = this.state.contacts.sort((a, b) => b[menuItem].localeCompare(a[menuItem]));
      this.setState({
        updatedContacts: sortedContactsUp,
        sortedContacts: false
      });
    }
  }

  loader = () => {
    return <h1 className="container">Carregando...</h1>
  }

  render() {
    return (
      <div data-testid="app" className="app">
        <Topbar />
        <Filters
          onChange={this.handleNameChange}
          sortContacts={this.sortContacts}
        />
        {
          this.state.loading ? this.loader() : 
          <Contacts
          contacts={this.state.updatedContacts}
        />
        }
      </div>
    )
  }
}

export default App;
