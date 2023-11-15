import {configureStore, createSlice} from '@reduxjs/toolkit'

const initialState = {
    contacts: [],
    filter: ''
}

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact:(state, action) => {
            state.contacts.push(action.payload)
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter((contact) => contact.id !== action.payload)
        },
        setFilter: (state, action) => {
      state.filter = action.payload
        }
    }
})

export const {addContact, deleteContact, setFilter} = contactSlice.actions
export default configureStore({
    reducer: {
        contact: contactSlice.reducer
    }
})