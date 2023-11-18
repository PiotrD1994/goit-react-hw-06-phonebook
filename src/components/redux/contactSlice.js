import {createSlice, createAction} from '@reduxjs/toolkit'

export const addContact = createAction('contacts/addContact')
export const deleteContact = createAction('contacts/deleteContact')
export const setFilter = createAction('contacts/setFilter')

const contactSlice = createSlice({
    name: 'contacts',
    initialState:{contacts: [], filter: ''},
    reducers: {
        saveContact: (state, action) => {
            state.contacts.push(action.payload)
        },
        removeContact: (state, action) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
        },
        refreshFilter: (state, action) => {
            state.filter = action.payload
        },
    }
})

export const {saveContact, removeContact, refreshFilter} = contactSlice.actions
export default contactSlice.reducer