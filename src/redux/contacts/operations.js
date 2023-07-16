import { createAsyncThunk } from '@reduxjs/toolkit';
const BASE_URL = 'https://64a70e8b096b3f0fcc810776.mockapi.io/contacts';

export const getContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await fetch(BASE_URL).then(response => response.json());
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (newContact, thunkAPI) => {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify(newContact),
      headers: { 'content-Type': 'application/json' },
    };
    const responseObj = await fetch(BASE_URL, options).then(result => result.json());
    return responseObj;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
  try {
    const responseDelete = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' }).then(result =>
      result.json()
    );
    return responseDelete;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
