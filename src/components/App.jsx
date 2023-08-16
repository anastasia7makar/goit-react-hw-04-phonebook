import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { initialContacts } from 'data/initialContacts';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Section from './Section/Section';

const LS_KEY = 'contacts';
const parsedContacts = JSON.parse(localStorage.getItem(LS_KEY));

export const App = () => {
  const [contacts, setContacts] = useState(parsedContacts ?? initialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
    console.log(LS_KEY, contacts);
  }, [contacts]);

  const handlerSubmit = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };

    const isExistContact = contacts.findIndex(
      contact => contact.name === newContact.name
    );

    if (isExistContact !== -1)
      return alert(`${newContact.name} is already in contacts`);

    setContacts([...contacts, newContact]);
  };

  const onFilter = e => {
    return setFilter(e.currentTarget.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = userId => {
    setContacts(contacts.filter(contact => contact.id !== userId));
  };

  return (
    <div>
      <Section title="Phonebook">
        <ContactForm addContact={handlerSubmit} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} handleChangeFilter={onFilter} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={deleteContact}
        />
      </Section>
    </div>
  );
};
