import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, filterChange, nameChange, numberChange, nameReset, numberReset } from "./actions";


const contactsInitialState = JSON.parse(window.localStorage.getItem('contacts')) ?? [];

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {return [...state, action.payload]},
  [deleteContact]: (state, action) => {return state.filter(contact => contact.id !== action.payload)},
});


const filterInitialState = "";
export const filterReducer = createReducer(filterInitialState, {
  [filterChange]: (state, action) => {return state = action.payload},
});


const nameInitialState = "";
export const nameReducer = createReducer(nameInitialState, {
  [nameChange]: (state, action) => { return state = action.payload },
  [nameReset]: (state, action) => { return state = action.payload },
});

const numberInitialState = "";
export const numberReducer = createReducer(numberInitialState, {
  [numberChange]: (state, action) => { return state = action.payload },
  [numberReset]: (state, action) => { return state = action.payload },
});

