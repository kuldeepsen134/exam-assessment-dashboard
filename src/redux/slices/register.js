import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from '../axios'

const initialState = {
  loading: false,
  userData: {},
  error: null,
}

export const registerUser = createAsyncThunk('register', async (params, { rejectWithValue }) => {
  try {
    return await apiClient.post('/register', params)
  } catch (error) {
    return rejectWithValue(error.response || '')
  }
})

const registerUserSlice = createSlice({
  name: 'register',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending]: (state, action) => {
      // console.log('pending', action);
      state.loading = true;
      state.userData = {};
      state.error = null;
    },
    [registerUser.fulfilled]: (state, action) => {
      // console.log('fulfilled', action);
      state.loading = false;
      state.userData = action.payload;
      state.error = null;
    },
    [registerUser.rejected]: (state, action) => {
      // console.log('rejected', action);
      state.loading = false;
      state.userData = {};
      state.error = action.payload;
    },

  }
})


export default registerUserSlice.reducer;

