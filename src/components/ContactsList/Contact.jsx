import PropTypes from 'prop-types';
import { ContactItem } from './Contact.styled';

export const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <ContactItem>
      {name}: {number}
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </ContactItem>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
