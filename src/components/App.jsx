import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { Contacts } from 'components/contacts/Contacts';
import { Form } from 'components/form/Form';
import { Filter } from 'components/filter/Filter';
import {Box, BoxForm, Title} from 'components/App.styled'

const LOKAL_KEY = 'my-contacts';

export const App = () => {
  
    const [contacts, setContacts] = useState([]);
    const [filter, setFilter] = useState(''); 


    useEffect(() => {
      const friends = JSON.parse(localStorage.getItem(LOKAL_KEY));
      if (friends) {
        setContacts(prev => [...prev, ...friends]);
      }
    }, []);
    
    useEffect(() => {
      window.localStorage.setItem(LOKAL_KEY, JSON.stringify(contacts));
    }, [contacts]);

    const AddFriend = (event, { resetForm }) => {
      const contactName = [];
      const friendId = nanoid();
  
      for (const contact of contacts) {
        contactName.push(contact.name.toLowerCase());
      }
  
      if (contactName.includes(event.name.toLowerCase())) {
        alert(`${event.name} is already in contacts list`);
        return;
      }
      const user = { ...event, id: friendId };
      setContacts(prev => [user, ...prev]);
      resetForm();
    };
  

    const onDelite = friendId => {
      setContacts(contacts.filter(contact => contact.id !== friendId));
    };
  
    const normalizedName = filter.toLowerCase();
  
    const visContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedName)
    );
  

    return (
      <Box>
        <Title>Phonebook</Title>
        <BoxForm>
          <Form onSubmit={AddFriend} />
        </BoxForm>
          <h3>Contacts</h3>
            <Filter value={filter} onChange={evt => setFilter(evt.currentTarget.value)} />
            {contacts.length > 0 && (
              <Contacts contacts={visContacts} onDelite={onDelite} />
            )}
      </Box>
    );
  }
