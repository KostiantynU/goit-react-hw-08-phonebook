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
// import { contactsReducerWB } from './contacts/contactsSliceWB';
// import { authReducer, authIsErrorRefresh } from './auth/authenticateSlice';
import { unitedReducer } from './authAndContactsSlice/authAndContactsSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] },
  }),
];

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

const authPersistConfig = {
  key: 'unitedState',
  storage,
  whitelist: ['unitedState.auth.user.token'],
};

export const storeWB = configureStore({
  reducer: {
    unitedState: persistReducer(authPersistConfig, unitedReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistorWB = persistStore(storeWB);

// reducer: {
//   auth: persistReducer(authPersistConfig, authReducer, authIsErrorRefresh),
//   contacts: contactsReducerWB,
// },
