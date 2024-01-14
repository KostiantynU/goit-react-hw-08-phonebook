import { logIn, logOut, refreshUser, register } from './authOperations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { userName: '', userEmail: '' },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isError: null,
  isErrorLogin: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeIsErrorLogin: {
      reducer(state, action) {
        state.isErrorLogin = false;
      },
    },
    changeIsLoggedIn: {
      reducer(state, action) {
        state.isLoggedIn = false;
      },
    },
  },
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.newUser;
      // state.token = action.payload.token;
      // state.isLoggedIn = true;
    },
    [logIn.pending](state, action) {
      state.token = null;
      state.isLoggedIn = false;
      state.token = null;
      state.isError = null;
      state.isErrorLogin = null;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isError = null;
      state.isErrorLogin = null;
    },
    [logIn.rejected](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isErrorLogin = action.payload;
      state.isLoggedIn = false;
      state.isRefreshing = false;
    },
    [logOut.fulfilled](state, action) {
      state.user = action.payload.exitedUser;
      state.token = null;
      state.isLoggedIn = false;
      state.isError = null;
      state.isErrorLogin = null;
    },
    [logOut.rejected](state, action) {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
      state.isError = null;
      state.isErrorLogin = null;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
      state.isError = null;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.isError = null;
      state.isErrorLogin = null;
    },
    [refreshUser.rejected](state, action) {
      state.isRefreshing = false;
      state.token = null;
      state.isLoggedIn = false;
      state.isErrorLogin = false;
      state.isError = true;
    },
  },
});

export const { changeIsErrorLogin, changeIsLoggedIn } = authSlice.actions;
export const authIsErrorRefresh = authSlice.reducer;
export const authReducer = authSlice.reducer;
