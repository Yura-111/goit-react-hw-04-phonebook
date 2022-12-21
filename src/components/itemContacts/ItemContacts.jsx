import PropTypes from 'prop-types';

import { Description, Buttons } from 'components/itemContacts/ItemContact.styled';

export const ItemContact = ({ id, name, number, onDelite }) => {
  return (
    <>      
      <Description>
        {name} : {number}
      </Description>        
      <Buttons type="button" onClick={() => onDelite(id)}>
        Delite
      </Buttons>
    </>
  );
};

ItemContact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelite: PropTypes.func.isRequired,
};
