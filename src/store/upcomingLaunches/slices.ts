import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_UPCOMING_LAUNCHES_STATE, fetchBatch } from ".";

const upcomingLaunchesSlice = createSlice({
  name: "upcomingLaunches",
  initialState: INITIAL_UPCOMING_LAUNCHES_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBatch.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchBatch.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    });
    builder.addCase(fetchBatch.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const upcomingLaunchesReducer = upcomingLaunchesSlice.reducer;
