import { configureStore } from "@reduxjs/toolkit";
import { filterReducer, contactsReducer } from './reducer';


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
  },
});
