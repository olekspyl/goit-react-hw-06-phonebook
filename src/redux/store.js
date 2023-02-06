import { configureStore } from "@reduxjs/toolkit";
import { filterReducer, contactsReducer, nameReducer, numberReducer} from './reducer';


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
        name: nameReducer,
        number: numberReducer,
  },
});
