import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsWB,
  addContactWB,
  deleteContactWB,
  updateContact,
} from './operationsWithBackend';
import { logOut } from 'redux/auth/authOperations';

const handlePending = state => {
  state.phonebook.isLoading = true;
  state.phonebook.isError = false;
};
const handleReject = (state, action) => {
  state.phonebook.isLoading = false;

  state.phonebook.isError = action.payload.handleErrorMessage;
};

const contactsSliceWB = createSlice({
  name: 'contactsSliceWB',
  initialState: {
    phonebook: {
      items: [],
      isLoading: false,
      isError: null,
    },
    filter: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
    handleChangeIsErrorPhoneBook(state, action) {
      state.phonebook.isError = null;
    },
  },

  extraReducers: {
    [fetchContactsWB.pending]: handlePending,
    [addContactWB.pending]: handlePending,
    [deleteContactWB.pending]: handlePending,
    // [logOut.pending]: handlePending,
    [updateContact.pending]: handlePending,
    [fetchContactsWB.rejected]: handleReject,
    [addContactWB.rejected]: handleReject,
    [deleteContactWB.rejected]: handleReject,
    // [logOut.rejected]: handleReject,
    [updateContact.rejected]: handleReject,
    [fetchContactsWB.fulfilled](state, action) {
      state.phonebook.isLoading = false;
      state.phonebook.isError = null;
      state.phonebook.items = action.payload.allContacts;
    },
    [addContactWB.fulfilled](state, action) {
      state.phonebook.isLoading = false;
      state.phonebook.isError = null;
      state.phonebook.items.push(action.payload);
    },
    [deleteContactWB.fulfilled](state, action) {
      state.phonebook.isLoading = false;
      state.phonebook.isError = null;
      const indx = state.phonebook.items.findIndex(
        contact => contact._id === action.payload.deletedContact._id
      );
      state.phonebook.items.splice(indx, 1);
    },
    [logOut.fulfilled](state) {
      state.phonebook.isLoading = false;
      state.phonebook.isError = null;
      state.phonebook.items = [];
    },
    [updateContact.fulfilled](state, action) {
      const indx = state.phonebook.items.findIndex(contact => contact._id === action.payload._id);
      state.phonebook.items.splice(indx, 1, action.payload);
      state.isError = null;
      state.isLoading = false;
    },
  },
});

export const { changeFilter, updateUserLocal, handleChangeIsErrorPhoneBook } =
  contactsSliceWB.actions;
export const contactsReducerWB = contactsSliceWB.reducer;
