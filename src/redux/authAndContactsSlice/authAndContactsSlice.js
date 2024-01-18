import { register, logIn, logOut, refreshUser } from 'redux/auth/authOperations';
import {
  fetchContactsWB,
  addContactWB,
  deleteContactWB,
  updateContact,
} from 'redux/contacts/operationsWithBackend';

const { createSlice } = require('@reduxjs/toolkit');

const handleContactsPending = state => {
  state.phonebook.isLoadingContacts = true;
  state.phonebook.isErrorContacts = false;
};
const handleFulfilledContacts = (state, action) => {
  state.phonebook.isLoadingContacts = false;
  state.phonebook.isErrorContacts = false;
};
const handleRejectContactsWithAuth = (state, action) => {
  state.phonebook.isLoadingContacts = false;
  state.phonebook.isErrorContacts = action.payload.handleErrorMessage;
  if (
    action.payload.handleErrorMessage === 'Token expired' ||
    action.payload.handleErrorMessage === 'Invalid token'
  ) {
    state.auth.isLoggedInAuth = false;
    state.auth.user.token = null;
  }
};

const initialState = {
  phonebook: {
    contactItems: [],
    isLoadingContacts: null,
    isErrorContacts: null,
    filter: '',
  },
  auth: {
    user: { userName: '', phoneNumber: '', token: null },
    isLoggedInAuth: null,
    isLoadingAuth: null,
    isRefreshingAuth: null,
    isErrorAuth: null,
    isErrorLogInAuth: null,
  },
};

const unitedSlice = createSlice({
  name: 'unitedState',
  initialState,
  reducers: {
    changeFilterUnited(state, action) {
      state.phonebook.filter = action.payload;
    },
    changeIsErrorLogin(state, action) {
      state.auth.isErrorLogInAuth = false;
    },
    changeIsErrorContacts(state, action) {
      state.phonebook.isErrorContacts = false;
    },
    changeIsLoggedIn(state, action) {
      state.auth.isLoggedInAuth = false;
    },
  },
  extraReducers: {
    [register.pending](state, action) {
      state.auth.isLoggedInAuth = false;
      state.auth.isLoadingAuth = true;
      state.auth.isRefreshingAuth = false;
      state.auth.isErrorAuth = false;
      state.auth.isErrorLogInAuth = false;
    },
    [register.fulfilled](state, action) {
      state.auth.user = action.payload.newUser;
      state.auth.isLoggedInAuth = true;
      state.auth.isLoadingAuth = false;
      state.auth.isRefreshingAuth = false;
      state.auth.isErrorAuth = false;
      state.auth.isErrorLogInAuth = false;
    },
    [register.rejected](state, action) {
      state.auth.user = { userName: '', phoneNumber: '', token: null };

      state.auth.isLoggedInAuth = false;
      state.auth.isLoadingAuth = false;
      state.auth.isRefreshingAuth = false;
      state.auth.isErrorAuth = false;
      state.auth.isErrorLogInAuth = action.payload.handleErrorMessage;
    },
    [logIn.pending](state, action) {
      state.auth.user = { userName: '', phoneNumber: '', token: null };

      state.auth.isLoadingAuth = true;
      state.auth.isErrorAuth = null;
      state.auth.isRefreshingAuth = true;
    },
    [logIn.fulfilled](state, action) {
      state.auth.user = action.payload.user;
      // state.auth.user.token = action.payload.token;
      state.auth.isLoggedInAuth = true;
      state.auth.isLoadingAuth = false;
      state.auth.isErrorAuth = false;
      state.auth.isRefreshingAuth = false;
    },
    [logIn.rejected](state, action) {
      state.auth.user = { userName: '', phoneNumber: '', token: null };
      state.auth.isLoggedInAuth = false;
      state.auth.isLoadingAuth = false;
      state.auth.isErrorLogInAuth = action.payload.handleErrorMessage;
      state.auth.isRefreshingAuth = false;
    },
    [logOut.fulfilled](state, action) {
      state.auth.user = action.payload.exitedUser;
      // state.auth.user.token = null;
      state.auth.isLoggedInAuth = false;
      state.auth.isLoadingAuth = false;
      state.auth.isErrorAuth = false;
      state.auth.isRefreshingAuth = false;
    },
    [logOut.rejected](state, action) {
      state.auth.user = { userName: '', phoneNumber: '', token: null };
      state.auth.isLoggedInAuth = false;
      state.auth.isLoadingAuth = false;
      state.auth.isErrorAuth = action.payload.data;
      state.auth.isRefreshingAuth = false;
    },
    [refreshUser.pending](state) {
      // state.auth.isLoggedInAuth = false;
      state.auth.isLoadingAuth = true;
      state.auth.isErrorAuth = false;
      state.auth.isRefreshingAuth = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.auth.user = action.payload;
      state.auth.isLoggedInAuth = true;
      state.auth.isLoadingAuth = false;
      state.auth.isErrorAuth = false;
      state.auth.isRefreshingAuth = false;
    },
    [refreshUser.rejected](state, action) {
      state.auth.user = { userName: '', phoneNumber: '', token: null };
      state.auth.isLoggedInAuth = false;
      state.auth.isLoadingAuth = false;
      state.auth.isErrorAuth = action.payload.handleErrorMessage;
      state.auth.isRefreshingAuth = false;
    },
    [fetchContactsWB.pending]: handleContactsPending,
    [addContactWB.pending]: handleContactsPending,
    [deleteContactWB.pending]: handleContactsPending,
    [updateContact.pending]: handleContactsPending,
    [fetchContactsWB.rejected]: handleRejectContactsWithAuth,
    [addContactWB.rejected]: handleRejectContactsWithAuth,
    [deleteContactWB.rejected]: handleRejectContactsWithAuth,
    [updateContact.rejected]: handleRejectContactsWithAuth,
    [fetchContactsWB.fulfilled](state, action) {
      handleFulfilledContacts(state, action);
      state.phonebook.contactItems = action.payload.allContacts;
    },
    [addContactWB.fulfilled](state, action) {
      handleFulfilledContacts(state, action);
      state.phonebook.contactItems.push(action.payload);
    },
    [deleteContactWB.fulfilled](state, action) {
      handleFulfilledContacts(state, action);
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
      handleFulfilledContacts(state, action);
    },
  },
});

export const { changeFilterUnited, changeIsErrorLogin, changeIsLoggedIn, changeIsErrorContacts } =
  unitedSlice.actions;
export const unitedReducer = unitedSlice.reducer;
