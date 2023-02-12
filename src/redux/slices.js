import { createSlice } from "@reduxjs/toolkit";
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: ''
  },
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
       state.contacts.push(payload);
      },
      prepare: ({ id, name, number }) => {
        return {
          payload: {
            id,
            name,
            number,
          },
        };
      },},
    deleteContact(state, { payload }) {
       state.contacts = state.contacts.filter(contact => contact.id !== payload.id);
    },
    changeFilter(state, { payload }) {
        state.filter = payload;
    },
  }
}
);

 
export const { addContact, deleteContact, changeFilter } = contactsSlice.actions;


export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

