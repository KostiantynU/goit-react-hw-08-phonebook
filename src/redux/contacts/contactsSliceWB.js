import { createSlice } from '@reduxjs/toolkit';
import { fetchContactsWB, addContactWB, deleteContactWB } from './operationsWithBackend';
import { logOut } from 'redux/auth/operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleReject = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
};

const contactsSliceWB = createSlice({
  name: 'contactsSliceWB',
  initialState: {
    items: [],
    isLoading: false,
    isError: null,
  },
  extraReducers: {
    [fetchContactsWB.pending]: handlePending,
    [addContactWB.pending]: handlePending,
    [deleteContactWB.pending]: handlePending,
    [fetchContactsWB.rejected]: handleReject,
    [addContactWB.rejected]: handleReject,
    [deleteContactWB.rejected]: handleReject,
    [fetchContactsWB.fulfilled](state, action) {
      state.isLoading = false;
      state.isError = null;
      state.items = action.payload;
    },
    [addContactWB.fulfilled](state, action) {
      state.isLoading = false;
      state.isError = null;
      state.items.push(action.payload);
    },
    [deleteContactWB.fulfilled](state, action) {
      state.isLoading = false;
      state.isError = null;
      const indx = state.items.findIndex(contact => contact.id === action.payload.id);
      state.items.splice(indx, 1);
    },
    [logOut.fulfilled](state) {
      state.isLoading = false;
      state.isError = null;
      state.items = [];
    },
  },
});

export const contactsReducerWB = contactsSliceWB.reducer;
