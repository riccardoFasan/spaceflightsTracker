import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUpcomingLaunchesBatch } from "../../services";
import { UpcomingLaunch } from "../../models";
import { RootState } from "../store";

export const fetchFirstBatch = createAsyncThunk(
  "upcomingLaunches/fetchBatch",
  async (_, { rejectWithValue }) => {
    try {
      const response: UpcomingLaunch[] = await getUpcomingLaunchesBatch(1);
      return response;
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  }
);

export const refreshFirstBatch = createAsyncThunk(
  "upcomingLaunches/refreshBatch",
  async (_, { rejectWithValue }) => {
    try {
      const response: UpcomingLaunch[] = await getUpcomingLaunchesBatch(1);
      return response;
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  }
);

export const fetchNextBatch = createAsyncThunk(
  "upcomingLaunches/nextBatch",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state: RootState = getState() as RootState;
      const currentBatch = state.upcomingLaunches.currentBatch;
      const response: UpcomingLaunch[] = await getUpcomingLaunchesBatch(
        currentBatch + 1
      );
      return response;
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  }
);
