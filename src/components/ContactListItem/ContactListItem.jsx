import PropTypes from 'prop-types';
import css from '../ContactListItem/ContactListItem.module.css'

const ContactListItem = ({ id, name, number, deleteContact }) => (
  <li className={css.item}>
    <p className={css.text}>
      {name}: <span>{number}</span>
    </p>
    <button onClick={() => deleteContact(id)}>Delete</button>
  </li>
);

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
