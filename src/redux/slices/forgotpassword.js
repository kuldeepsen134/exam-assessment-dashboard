import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from '../axios'

const initialState = {
  loading: false,
  isAuthenticated: {},
  forgotPasswordVerify: false,
  userData: {},
  error: null,
}

export const forgotPassword = createAsyncThunk('forgotpassword', async (params, { rejectWithValue }) => {
  try {
    return await apiClient.post('forgotpassword', params)
  } catch (error) {
    return rejectWithValue(error.response || '')
  }
})

export const forgotPasswordVerify = createAsyncThunk('forgotpassword/verify', async (params, { rejectWithValue }) => {
  try {
    return await apiClient.post('/forgotpassword/verify', params)
  } catch (error) {

    // console.log('errorrrrrrrrr', error);

    return rejectWithValue(error.response || '')
  }
})

const forgotPasswordSlice = createSlice({
  name: 'forgot',
  initialState: initialState,
  reducers: {},

  extraReducers: {
    [forgotPassword.pending]: (state, action) => {
      // console.log('pending', action);
      state.loading = true;
      state.isAuthenticated = false;
      state.userData = {};
      state.error = null;
    },
    [forgotPassword.fulfilled]: (state, action) => {
      // console.log('fulfilled', action);
      state.loading = false;
      state.emailVerify = true;
      state.userData = action.payload;
      state.error = null;
      state.alert = action.payload
    },
    [forgotPassword.rejected]: (state, action) => {
      // console.log('rejected', action);
      state.loading = false;
      state.isAuthenticated = false;
      state.userData = {};
    },

    //forgotPasswordVerify//

    [forgotPasswordVerify.pending]: (state, action) => {
      // console.log('forgotPasswordVerify', action);
      state.loading = true;
      state.isAuthenticated = false;
      state.userData = {};
      state.error = null;
    },
    [forgotPasswordVerify.fulfilled]: (state, action) => {
      // console.log('forgotPasswordVerify fulfilled', action);
      state.loading = false;
      state.isAuthenticated = true;
      state.userData = action.payload;
      state.error = null;

    },
    [forgotPasswordVerify.rejected]: (state, action) => {
      // console.log('forgotPasswordVerify rejected', action);
      state.loading = true;
      state.isAuthenticated = false;
      state.userData = {};
      state.error = action.payload;
    },
  }
})


export default forgotPasswordSlice.reducer;

