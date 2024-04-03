import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../axios";
const initialState = {
  loading: false,
  usersList: [],
  selectedUser: {},
  errors: null,
};

export const getUsers = createAsyncThunk(
  "get/users",
  async (params, { rejectWithValue }) => {
    try {
      return await apiClient.get("/users", params);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const addUser = createAsyncThunk(
  "users",
  async (params, { rejectedWithValue }) => {
    try {
      return await apiClient.post(`/users`, params);
    } catch (error) {
      return rejectedWithValue(error.response.data);
    }
  }
);

export const getSelectedUser = createAsyncThunk(
  "get/SelectedUser",
  async (params, { rejectWithValue }) => {
    try {
      return await apiClient.get(`/users/${params}`);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const updateUser = createAsyncThunk(
  "users",
  async (params, { rejectedWithValue }) => {
    console.log("params_params", params);
    try {
      return await apiClient.put(`users/${params.id}`, params);
    } catch (error) {
      return rejectedWithValue(error.response);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "delete/user",
  async (params, { rejectedWithValue }) => {
    console.log("params_params", params);
    try {
      return await apiClient.delete(`users/${params}`);
    } catch (error) {
      return rejectedWithValue(error.response);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducer: {},
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      // console.log('pending', action);
      state.loading = true;
      state.usersList = [];
      state.errors = null;
    },
    [getUsers.fulfilled]: (state, action) => {
      // console.log('fulfilled', action);
      state.loading = false;
      state.usersList = action.payload;
      state.errors = null;
    },
    [getUsers.rejected]: (state, action) => {
      // console.log('rejected', action);
      state.loading = false;
      state.usersList = [];
      state.errors = action.payload;
    },

    [addUser.pending]: (state, action) => {
      state.loading = true;
      state.errors = null;
    },
    [addUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.alerts = action.payload;
      state.errors = null;
    },
    [addUser.rejected]: (state, action) => {
      state.loading = false;
      state.alerts = action.payload;
      state.errors = action.payload;
    },
    [getSelectedUser.pending]: (state, action) => {
      console.log("pending", action);
      state.loading = true;
      state.usersList = {};
      state.errors = null;
    },
    [getSelectedUser.fulfilled]: (state, action) => {
      console.log("fulfilled", action);
      state.loading = false;
      state.selectedUser = action.payload;
      state.errors = null;
    },
    [getSelectedUser.rejected]: (state, action) => {
      // console.log('rejected', action);
      state.loading = false;
      state.usersList = {};
      state.errors = action.payload;
    },

    [updateUser.pending]: (state, action) => {
      state.loading = true;
      state.errors = null;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.alerts = action.payload;
      state.errors = null;
    },
    [updateUser.rejected]: (state, action) => {
      state.loading = false;
      state.alerts = action.payload;
      state.errors = action.payload;
    },
  },
});

export default usersSlice.reducer;
