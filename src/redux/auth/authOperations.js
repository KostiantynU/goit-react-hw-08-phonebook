import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'; // Old address for Repeta backend
// axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.baseURL = 'http://phonebook-backend-e72278147ae9.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  try {
    // const response = await axios.post('users/signup', credentials);
    const response = await axios.post('api/auth/register', credentials);

    setAuthHeader(response.data.newUser.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({
      error: error.message,
      handleErrorMessage: error.response.data.message,
    });
  }
});

export const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    // const response = await axios.post('users/login', credentials);
    const response = await axios.post('api/auth/login', credentials);
    setAuthHeader(response.data.user.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({
      error: error.message,
      handleErrorMessage: error.response.data.message,
    });
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    // await axios.post('users/logout');
    const result = await axios.post('api/auth/logout');
    clearAuthHeader();

    return result.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({
      error: error.message,
      handleErrorMessage: error.response.data.message,
    });
  }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  // const persistedToken = state.auth.token;
  const persistedToken = state.unitedState.auth.user.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue({ handleErrorMessage: 'Unable to fetch user' });
  }
  try {
    setAuthHeader(persistedToken);
    const response = await axios.get('api/auth/current');
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue({
      error: error.message,
      handleErrorMessage: error.response.data.message,
    });
  }
});
