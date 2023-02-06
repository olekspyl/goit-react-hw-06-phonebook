import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { filterReducer, contactsReducer, nameReducer, numberReducer} from './reducer';

const contactsSlice = createSlice({
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



const filterSlice = createSlice({
  name: 'filter',
  initialState: "",
  reducers: {
   filterChange(state, action) {
      return state = action.payload
    }
  }
});
export const { filterChange } = filterSlice.actions;


const nameSlice = createSlice({
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

const numberSlice = createSlice({
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



export const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer,
        filter: filterSlice.reducer,
        name: nameSlice.reducer,
        number: numberSlice.reducer,
  },
});

