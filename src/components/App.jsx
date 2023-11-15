import React, { useState, useEffect } from "react";
import ContactForm from './ContactForm/ContactForm.jsx';
import Filter from "./Filter/Filter.jsx";
import ContactList from "./ContactList/ContactList.jsx";
import { nanoid } from 'nanoid';
import css from './App.module.css';
import {Provider} from 'react-redux'
import store from './store.js'

const App = () => {
  const [contacts, setContacts] = useState([  
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = (data) => {
    const chosenName = contacts.find(
      (element) => element.name.toLowerCase() === data.name.toLowerCase()
    );
    if (chosenName) {
      alert(chosenName.name + ' is already in contacts');
    } else {
      data.id = nanoid();
      setContacts((prevContacts) => [data, ...prevContacts]);
    }
  }

  const changeFilter = (event) => {
    setFilter(event.currentTarget.value);
  }

  const getVisibleContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter));
  }

  const removeContact = (contactID) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactID)
    );
  };

  return (
    <Provider store={store}>
    <div>
      <div>
        <h2 className={css.header}>Phonebook</h2>
        <ContactForm onSubmit={handleSubmit} />
      </div>
      <div>
        <h2 className={css.header}>Contacts</h2>
        {contacts.length > 0 ? (
          <Filter value={filter} onChange={changeFilter} />
        ) : (
          <span>Your phonebook is empty. Add your first contact!</span>
        )}
        {contacts.length > 0 && (<ContactList contacts={getVisibleContact()} onRemove={removeContact} />)}
      </div>
    </div>
    </Provider>
  );
}

export default App;