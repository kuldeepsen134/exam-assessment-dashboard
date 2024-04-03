import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../axios";
const initialState = {
  loading: false,
  questionsList: [],
  questions: {},
  errors: null,
};

/** Get all question list */

export const getQuestions = createAsyncThunk(
  "get/questions",
  async (params, { rejectWithValue }) => {
    try {
      return await apiClient.get("/question", params);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

/** Add new question */

export const addNewQuestions = createAsyncThunk(
  "addQuestion",
  async (params, { rejectWithValue }) => {
    try {
      return await apiClient.post("/question", params);
    } catch (error) {
      return rejectWithValue(error.response || "");
    }
  }
);

const questionsSlice = createSlice({
  name: "questions",
  initialState: initialState,
  reducer: {},
  extraReducers: {
    [getQuestions.pending]: (state, action) => {
      // console.log('pending', action);
      state.loading = true;
      state.questionsList = [];
      state.errors = null;
    },
    [getQuestions.fulfilled]: (state, action) => {
      // console.log('fulfilled', action);
      state.loading = false;
      state.questionsList = action.payload;
      state.errors = null;
    },
    [getQuestions.rejected]: (state, action) => {
      console.log("rejected", action);
      state.loading = false;
      state.questionsList = [];
      state.errors = action.payload;
    },

    [addNewQuestions.pending]: (state, action) => {
      // console.log('pending', action);
      state.loading = true;
      state.questions = {};
      state.error = null;
    },
    [addNewQuestions.fulfilled]: (state, action) => {
      // console.log('fulfilled', action);
      state.loading = false;
      state.questions = action.payload;
      state.error = null;
    },
    [addNewQuestions.rejected]: (state, action) => {
      // console.log('rejected', action);
      state.loading = false;
      state.questions = {};
      state.error = action.payload;
    },
  },
});

export default questionsSlice.reducer;
