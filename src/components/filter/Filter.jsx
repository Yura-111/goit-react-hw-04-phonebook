import PropTypes from 'prop-types';
import { Textlabel, InputFilter } from 'components/filter/Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <Textlabel>Find contacts by name
        <InputFilter type="text" value={value} onChange={onChange} />
      </Textlabel>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
