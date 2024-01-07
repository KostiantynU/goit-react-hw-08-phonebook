import { logIn, logOut, refreshUser, register } from './authOperations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { userName: '', userEmail: '' },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isError: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeIsErrorAuth: {
      reducer(state, action) {
        state.isError = false;
      },
    },
  },
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.newUser;
      // state.token = action.payload.token;
      // state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isError = false;
    },
    [logIn.rejected](state, action) {
      state.isError = true;
      state.isLoggedIn = false;
      state.isRefreshing = false;
    },
    [logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isError = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
      state.isError = false;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
      state.token = null;
    },
  },
});

export const { changeIsErrorAuth } = authSlice.actions;
export const authIsErrorReducer = authSlice.reducer;
export const authReducer = authSlice.reducer;
