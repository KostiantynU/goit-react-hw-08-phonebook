import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact } from './operations';
import { getContacts } from './operations';

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'phoneBook',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
    isEditOpen: false,
  },
  reducers: {
    changeEditOpen(state) {
      state.isEditOpen = !state.isEditOpen;
    },
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },

  extraReducers: {
    [getContacts.pending]: handlePending,
    [getContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [getContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const indx = state.contacts.items.findIndex(el => el.id === action.payload.id);
      state.contacts.items.splice(indx, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const { fetchInProgress, fetchIsSuccess, fetchIsError, changeFilter, changeEditOpen } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
