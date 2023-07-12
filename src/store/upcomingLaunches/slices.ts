import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  INITIAL_UPCOMING_LAUNCHES_STATE,
  fetchFirstBatch,
  refreshFirstBatch,
  fetchNextBatch,
} from ".";
import { UpcomingLaunch } from "../../models";

const upcomingLaunchesSlice = createSlice({
  name: "upcomingLaunches",
  initialState: INITIAL_UPCOMING_LAUNCHES_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFirstBatch.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchFirstBatch.fulfilled,
      (state, action: PayloadAction<UpcomingLaunch[]>) => {
        state.loading = false;
        state.items = action.payload;
        state.currentBatch = 1;
        state.totalCount = action.payload.length;
      }
    );
    builder.addCase(fetchFirstBatch.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchNextBatch.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchNextBatch.fulfilled,
      (state, action: PayloadAction<UpcomingLaunch[]>) => {
        const items = [...state.items, ...action.payload];
        state.loading = false;
        state.currentBatch += 1;
        state.items = items;
        state.totalCount = items.length;
      }
    );
    builder.addCase(fetchNextBatch.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(
      refreshFirstBatch.pending,
      (state) =>
        (state = { ...INITIAL_UPCOMING_LAUNCHES_STATE, refreshing: true })
    );
    builder.addCase(
      refreshFirstBatch.fulfilled,
      (state, action: PayloadAction<UpcomingLaunch[]>) => {
        state.refreshing = false;
        state.items = action.payload;
        state.currentBatch = 1;
        state.totalCount = action.payload.length;
      }
    );
    builder.addCase(refreshFirstBatch.rejected, (state) => {
      state.refreshing = false;
    });
  },
});

export const upcomingLaunchesReducer = upcomingLaunchesSlice.reducer;
