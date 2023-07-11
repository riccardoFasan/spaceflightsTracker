import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { INITIAL_UPCOMING_LAUNCHES_STATE, fetchBatch, refreshBatch } from ".";
import { UpcomingLaunch } from "../../models";

const upcomingLaunchesSlice = createSlice({
  name: "upcomingLaunches",
  initialState: INITIAL_UPCOMING_LAUNCHES_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBatch.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchBatch.fulfilled,
      (state, action: PayloadAction<UpcomingLaunch[]>) => {
        state.loading = false;
        state.items = action.payload;
      }
    );
    builder.addCase(fetchBatch.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(
      refreshBatch.pending,
      (state) =>
        (state = { ...INITIAL_UPCOMING_LAUNCHES_STATE, refreshing: true })
    );
    builder.addCase(
      refreshBatch.fulfilled,
      (state, action: PayloadAction<UpcomingLaunch[]>) => {
        state.refreshing = false;
        state.items = action.payload;
      }
    );
    builder.addCase(refreshBatch.rejected, (state) => {
      state.refreshing = false;
    });
  },
});

export const upcomingLaunchesReducer = upcomingLaunchesSlice.reducer;
