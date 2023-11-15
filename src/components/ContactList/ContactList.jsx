import React from "react";
import PropTypes from 'prop-types';
import css from './ContactList.module.css'
import {useSlector, useDispatch} from 'react-redux'
import { deleteContact} from "components/store";

const ContactList = () => {
  const dispatch = useDispatch()
  const contacts = useSlector((state) => state.contact.contacts)
  const filter = useSlector((state) => state.contact.filter)
  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
  const handleDelete = (id) => {
    dispatch(deleteContact(id))
  }
return (
  <ul>
    {filteredContacts.map((contact) => (
      <li key={contact.id}>
        {contact.name}: {contact.number}
        <button onClick={() => handleDelete(contact.id)}>Delete</button>
      </li>
    ))}
  </ul>
)
}


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;