import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Contacts } from 'components/contacts/Contacts';
import { Form } from 'components/form/Form';
import { Filter } from 'components/filter/Filter';
import {Box, BoxForm, Title} from 'components/App.styled'

const LOKAL_KEY = 'my-contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const friends = JSON.parse(localStorage.getItem(LOKAL_KEY));

    if (friends) {
      this.setState({
        contacts: friends,
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contact !== this.state.contacts) {
      localStorage.setItem(LOKAL_KEY, JSON.stringify(this.state.contacts));
    }
  }

  onSubmit = ({ name, number }, { resetForm }) => {
    const friendId = nanoid();
    const findedContact = this.state.contacts.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );

    if (findedContact) {
      alert(`${findedContact.name} is already in contacts`);
      return;
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { id: friendId, name, number }],
      }));
    }

    resetForm();
  };

  filterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisContacts = () => {
    const { contacts } = this.state;
    const filterNormalized = this.state.filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalized)
    );
  };

  deliteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const { onSubmit, filterChange, deliteContact } = this;
    const { contacts, filter } = this.state;
    const visContacts = this.getVisContacts();

    return (
      <Box>
        <Title>Phonebook</Title>
        <BoxForm>
          <Form onSubmit={onSubmit} />
        </BoxForm>
          <h3>Contacts</h3>
            <Filter value={filter} onChange={filterChange} />
            {contacts.length > 0 && (
              <Contacts contacts={visContacts} onDelite={deliteContact} />
            )}
      </Box>
    );
  }
}
