import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContactsWB = createAsyncThunk('contacts/fetchAllWB', async (_, thunkAPI) => {
  try {
    // const response = await axios.get('contacts');
    const response = await axios.get('api/contacts');

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({
      error: error.message,
      handleErrorMessage: error.response.data.message,
    });
  }
});

export const addContactWB = createAsyncThunk('contacts/addWB', async (credentials, thunkAPI) => {
  try {
    // const response = await axios.post('contacts', credentials);
    const response = await axios.post('api/contacts', credentials);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({
      error: error.message,
      handleErrorMessage: error.response.data.message,
    });
  }
});

export const deleteContactWB = createAsyncThunk('contacts/delete', async (contactId, thunkAPI) => {
  try {
    const response = await axios.delete(`api/contacts/${contactId}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({
      error: error.message,
      handleErrorMessage: error.response.data.message,
    });
  }
});

export const updateContact = createAsyncThunk('updateContact', async (credentials, thunkAPI) => {
  try {
    const updObj = { contactName: credentials.contactName, phoneNumber: credentials.phoneNumber };
    const response = await axios.patch(`api/contacts/${credentials.id}`, updObj);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({
      error: error.message,
      handleErrorMessage: error.response.data.message,
    });
  }
});
