import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from '../axios'

const initialState = {
  loading: false,
  isAuthenticated: false,
  userData: {},
  error: null,
}

export const loginUser = createAsyncThunk('login', async (params, { rejectWithValue }) => {
  try {
    return await apiClient.post('login', params)
  } catch (error) {
    return rejectWithValue(error.response || '')
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      // console.log('pending', action);
      state.loading = true;
      state.isAuthenticated = false;
      state.userData = {};
    },
    [loginUser.fulfilled]: (state, action) => {
      // console.log('fulfilled', action);
      state.loading = false;
      state.isAuthenticated = true;
      state.userData = action.payload;
    },
    [loginUser.rejected]: (state, action) => {
      // console.log('rejected', action);
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

  }
})


export default authSlice.reducer;

