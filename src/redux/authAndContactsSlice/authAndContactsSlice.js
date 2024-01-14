import { register, logIn, logOut, refreshUser } from 'redux/auth/authOperations';
import {
  fetchContactsWB,
  addContactWB,
  deleteContactWB,
  updateContact,
} from 'redux/contacts/operationsWithBackend';

const { createSlice } = require('@reduxjs/toolkit');

const handlePending = state => {
  state.phonebook.isLoadingContacts = true;
  state.phonebook.isErrorContacts = false;
};
const handleReject = (state, action) => {
  state.phonebook.isLoadingContacts = false;
  state.phonebook.isErrorContacts = action.payload.handleErrorMessage;
  if (action.payload.handleErrorMessage === 'Token expired') {
    state.auth.isLoggedInAuth = false;
  }
};

const initialState = {
  phonebook: {
    contactItems: [],
    isLoadingContacts: false,
    isErrorContacts: false,
    filter: '',
  },
  auth: {
    user: { userName: '', phoneNumber: '', token: null },
    isLoggedInAuth: false,
    isLoadingAuth: false,
    isRefreshingAuth: false,
    isErrorAuth: false,
    isErrorLogInAuth: false,
  },
};

const unitedSlice = createSlice({
  name: 'unitedState',
  initialState,
  reducer: {
    changeFilterUnited(state, action) {
      state.filter = action.payload;
    },
    changeIsErrorLogin(state, action) {
      state.auth.isErrorLogInAuth = false;
    },
    changeIsLoggedIn(state, action) {
      state.auth.isLoggedInAuth = false;
    },
  },
  extraReducers: {
    [register.fulfilled](state, action) {
      state.auth.user = action.payload.newUser;
      // state.auth.token = action.payload.token;
      // state.auth.isLoggedIn = true;
    },
    [register.rejected](state, action) {
      state.auth.isErrorAuth = action.payload.data;
    },
    [logIn.pending](state, action) {
      state.auth.user.token = null;
      state.auth.isLoggedInAuth = false;
      state.auth.isLoadingAuth = true;
      state.auth.isErrorAuth = null;
    },
    [logIn.fulfilled](state, action) {
      state.auth.user = action.payload.user;
      state.auth.user.token = action.payload.token;
      state.auth.isLoggedInAuth = true;
      state.auth.isLoadingAuth = false;
      state.auth.isErrorAuth = null;
    },
    [logIn.rejected](state, action) {
      state.auth.user.token = null;
      state.auth.isLoggedInAuth = false;
      state.auth.isLoadingAuth = false;
      state.auth.isErrorLogInAuth = action.payload.handleErrorMessage;
    },
    [logOut.fulfilled](state, action) {
      state.auth.user = action.payload.exitedUser;
      state.auth.user.token = null;
      state.auth.isLoggedInAuth = false;
      state.auth.isLoadingAuth = false;
      state.auth.isErrorAuth = null;
    },
    [logOut.rejected](state, action) {
      state.auth.user = null;
      state.auth.isLoggedInAuth = false;
      state.auth.isLoadingAuth = false;
      state.auth.isErrorAuth = action.payload.data;
    },
    [refreshUser.pending](state) {
      state.auth.isLoggedInAuth = false;
      state.auth.isLoadingAuth = true;
      state.auth.isErrorAuth = null;
    },
    [refreshUser.fulfilled](state, action) {
      state.auth.user = action.payload;
      state.auth.isLoggedInAuth = true;
      state.auth.isLoadingAuth = false;
      state.auth.isErrorAuth = null;
    },
    [refreshUser.rejected](state, action) {
      state.auth.user.token = null;
      state.auth.isLoggedInAuth = false;
      state.auth.isLoadingAuth = false;
      state.auth.isErrorAuth = action.payload.handleErrorMessage;
    },
    [fetchContactsWB.pending]: handlePending,
    [addContactWB.pending]: handlePending,
    [deleteContactWB.pending]: handlePending,
    [updateContact.pending]: handlePending,
    [fetchContactsWB.rejected]: handleReject,
    [addContactWB.rejected]: handleReject,
    [deleteContactWB.rejected]: handleReject,
    [updateContact.rejected]: handleReject,
    [fetchContactsWB.fulfilled](state, action) {
      state.phonebook.isLoadingContacts = false;
      state.phonebook.isErrorContacts = null;
      state.phonebook.contactItems = action.payload.allContacts;
    },
    [addContactWB.fulfilled](state, action) {
      state.phonebook.isLoadingContacts = false;
      state.phonebook.isErrorContacts = null;
      state.phonebook.contactItems.push(action.payload);
    },
    [deleteContactWB.fulfilled](state, action) {
      state.phonebook.isLoadingContacts = false;
      state.phonebook.isErrorContacts = null;
      const indx = state.phonebook.contactItems.findIndex(
        contact => contact._id === action.payload.deletedContact._id
      );
      state.phonebook.contactItems.splice(indx, 1);
    },
    [updateContact.fulfilled](state, action) {
      const indx = state.phonebook.contactItems.findIndex(
        contact => contact._id === action.payload._id
      );
      state.phonebook.contactItems.splice(indx, 1, action.payload);
      state.phonebook.isLoadingContacts = false;
      state.phonebook.isErrorContacts = null;
    },
  },
});

export const { changeFilterUnited, changeIsErrorLogin, changeIsLoggedIn } = unitedSlice.actions;
export const unitedReducer = unitedSlice.reducer;
