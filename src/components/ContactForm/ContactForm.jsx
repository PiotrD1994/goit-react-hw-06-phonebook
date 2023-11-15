import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addContact } from 'components/store' 

const ContactForm = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({ name:'', number:''})

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addContact(formData))
    setFormData({name:'', number:''})
  }
  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData({...formData, [name]:value})
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="number"
        value={formData.number}
        onChange={handleChange}
        placeholder="Number"
      />
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm