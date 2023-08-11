import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import css from '../ContactList/ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => (
  <ul className={css.contactList}>
    {contacts.map(({ id, name, number }) => {
      return (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      );
    })}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
