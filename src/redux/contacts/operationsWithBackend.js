import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContactsWB = createAsyncThunk('contacts/fetchAllWB', async (_, thunkAPI) => {
  try {
    const response = axios.get('contacts');
    return (await response).data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContactWB = createAsyncThunk('contacts/addWB', async (credentials, thunkAPI) => {
  try {
    const response = await axios.post('contacts', credentials);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContactWB = createAsyncThunk('contacts/delete', async (contactId, thunkAPI) => {
  try {
    const response = await axios.delete(`contacts/${contactId}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateUser = createAsyncThunk('updateUser', async (credentials, thunkAPI) => {
  try {
    const updObj = { name: credentials.name, number: credentials.number };
    const response = await axios.patch(`contacts/${credentials.id}`, updObj);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
