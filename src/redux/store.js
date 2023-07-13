import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { contactsAPI } from './contactsQuery';

export const store = configureStore({
  reducer: {
    phoneBook: contactsReducer,
    [contactsAPI.reducerPath]: contactsAPI.reducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), contactsAPI.middleware],
});
