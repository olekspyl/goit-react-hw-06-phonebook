import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, filterChange } from "./actions";


const contactsInitialState = JSON.parse(window.localStorage.getItem('contacts')) ?? [];

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {return [...state, action.payload]},
  [deleteContact]: (state, action) => {return state.filter(contact => contact.id !== action.payload)},
});




const filterInitialState = "";
export const filterReducer = createReducer(filterInitialState, {
  [filterChange]: (state, action) => {return state = action.payload.target.value},
});




