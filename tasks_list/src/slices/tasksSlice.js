import tasks from '../data/tasks';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';


export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tasks);
    }, 2000);
  });
});


const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default tasksSlice.reducer;
