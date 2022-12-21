import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';

import { Button, Label, FormStyl } from 'components/form/Form.styled';


const initialValues = {
  name: '',
  number: '',
};

export const Form = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <FormStyl>
        <Label htmlFor="name">
          Name
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            style={{
              width: 300,
              fontSize: 14,
              padding: 8,
            }}
          />
        </Label>
        <Label htmlFor="number">
          Number
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            style={{
              width: 300,
              fontSize: 14,
              padding: 8,
            }}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormStyl>
    </Formik>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

