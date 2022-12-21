import PropTypes from 'prop-types';
import { ItemContact } from 'components/itemContacts/ItemContacts';
import {List, Items} from 'components/contacts/Contacts.styled'

export const Contacts = ({ contacts, onDelite }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <Items key={id}>
            <ItemContact            
            id={id}
            name={name}
            number={number}
            onDelite={onDelite}
            />
          </Items>
        );
      })}
    </List>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelite: PropTypes.func.isRequired,
};
