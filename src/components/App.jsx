import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { initialContacts } from 'data/initialContacts';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Section from './Section/Section';
import { useContacts } from 'hooks/useContacts';

export const App = () => {
  const { contacts, updateContacts } = useContacts(initialContacts);
  const [filter, setFilter] = useState('');

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

    updateContacts([...contacts, newContact]);
  };

  const onFilter = e => {
    return setFilter(e.currentTarget.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = userId => {
    updateContacts(contacts.filter(contact => contact.id !== userId));
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
