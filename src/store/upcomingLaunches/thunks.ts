import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUpcomingLaunchesBatch } from "../../services";
import { UpcomingLaunch } from "../../models";
import { RootState } from "../store";

export const fetchFirstBatch = createAsyncThunk(
  "upcomingLaunches/fetchBatch",
  async () => {
    const response: UpcomingLaunch[] = await getUpcomingLaunchesBatch(1);
    return response;
  }
);

export const refreshFirstBatch = createAsyncThunk(
  "upcomingLaunches/refreshBatch",
  async () => {
    const response: UpcomingLaunch[] = await getUpcomingLaunchesBatch(1);
    return response;
  }
);

export const fetchNextBatch = createAsyncThunk(
  "upcomingLaunches/nextBatch",
  async (_, { getState }) => {
    const state: RootState = getState() as RootState;
    const currentBatch = state.upcomingLaunches.currentBatch;
    const response: UpcomingLaunch[] = await getUpcomingLaunchesBatch(
      currentBatch + 1
    );
    return response;
  }
);
