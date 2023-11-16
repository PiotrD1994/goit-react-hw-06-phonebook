import {configureStore} from '@reduxjs/toolkit'
import contactsReducer from './contactSlice.js'

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    },
})