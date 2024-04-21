import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import problemService from "./problemService";

const initialState = {
  problems: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new problem
export const createProblem = createAsyncThunk(
  "problem/create",
  async (problemData, thunkAPI) => {
    try {
      //   const token = thunkAPI.getState().auth.user.token
      return await problemService.createProblem(problemData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get all problems
export const getProblems = createAsyncThunk(
  "problem/getAll",
  async (_, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token
      return await problemService.getProblems();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Update problem
export const updateProblem = createAsyncThunk(
  "problem/update",
  async (title, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token
      return await problemService.updateProblem(title);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete user problem
export const deleteProblem = createAsyncThunk(
  "problem/delete",
  async (title, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token
      return await problemService.deleteProblem(title);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const problemSlice = createSlice({
  name: "Problem",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProblem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProblem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.problemss.push(action.payload);
      })
      .addCase(createProblem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getProblems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProblems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.problems = action.payload;
      })
      .addCase(getProblems.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteProblem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProblem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.problems = state.problems.filter(
          (problem) => problem.title !== action.payload.title
        );
      })
      .addCase(deleteProblem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateProblem.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateProblem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.problems = state.problems.filter(
          (problem) => problem.title !== action.payload.title
        );
      })
      .addCase(updateProblem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = problemSlice.actions;
export default problemSlice.reducer;
