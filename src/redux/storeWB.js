import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducerWB } from './contacts/contactsSliceWB';
import { authReducer, authIsErrorReducer } from './auth/authenticateSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const storeWB = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer, authIsErrorReducer),
    contacts: contactsReducerWB,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistorWB = persistStore(storeWB);
