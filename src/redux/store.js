import { configureStore} from "@reduxjs/toolkit";
import { persistStore} from 'redux-persist'
import {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist'
import { contactsReducer } from "./slices";


export const store = configureStore({
  reducer: contactsReducer, 
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    })
  }
});


export const persistor = persistStore(store);
