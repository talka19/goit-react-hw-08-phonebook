import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { token } from "service/connectionsapi";


export const signUp = createAsyncThunk('auth/signUp', async (credentials, thunkAPI) => {
    try {
        const {data} = await axios.post('/users/signup', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const logIn = createAsyncThunk('auth/logIn', async (credentials, thunkAPI) => {
   try {
      const {data} = await axios.post('/users/login', credentials);
      token.set(data.token);
      return data;
   } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
   }
})

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if(persistedToken === null) {
        return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken)

    try {
        const {data} = await axios.get('/users/current');
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

const operations = {
    signUp,
    logIn,
    logOut,
    refreshUser,
}

export default operations