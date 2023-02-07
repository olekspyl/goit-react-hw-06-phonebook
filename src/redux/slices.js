import { createSlice } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  reducers: {
    addContact(state, action) {
      return [...state, action.payload]
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload)
    }
  }
});
export const { addContact, deleteContact } = contactsSlice.actions;


export const filterSlice = createSlice({
  name: 'filter',
  initialState: "",
  reducers: {
   filterChange(state, action) {
      return state = action.payload
    }
  }
});
export const { filterChange } = filterSlice.actions;


export const nameSlice = createSlice({
  name: 'name',
  initialState: "",
  reducers: {
   nameChange(state, action) {
      return state = action.payload
    },
    nameReset(state, action) {
      return state = action.payload
    },
  }
});
export const { nameChange, nameReset } = nameSlice.actions;

export const numberSlice = createSlice({
  name: 'number',
  initialState: "",
  reducers: {
   numberChange(state, action) {
      return state = action.payload
    },
    numberReset(state, action) {
      return state = action.payload
    },
  }
});
export const { numberChange, numberReset } = numberSlice.actions;