import { createSlice } from "@reduxjs/toolkit";
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { init } from "./constants";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['items'],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {items: init, filter: ''},
  reducers: {
    addContact(state, { payload }) {
      return state.items.push(payload);
    },
    deleteContact(state, { payload }) {
      return state.items.filter(contact => contact.id !== payload);
    },
    changeFilter(state, { payload }) {
      return {...state, filter: payload}
    },
  }
});
export const { addContact, deleteContact, changeFilter } = contactsSlice.actions;


export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

