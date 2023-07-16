import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { contactsAPI } from './contactsQuery';
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
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
};
const rootReducer = combineReducers({
  contactsReducer,
  [contactsAPI.reducerPath]: contactsAPI.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsAPI.middleware),
});

export const persistor = persistStore(store);
