import { useState, useEffect } from 'react';

const STORAGE_KEY = 'contacts';

export const useContacts = (initialValues = []) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    updateContacts(
      JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || initialValues
    );
  }, [initialValues]);

  const updateContacts = (updatedContacts = []) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedContacts));
    setContacts(updatedContacts);
  };

  return { contacts, updateContacts };
};
