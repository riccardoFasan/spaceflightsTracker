import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUpcomingLaunchesBatch } from "../../services";
import { UpcomingLaunch } from "../../models";

export const fetchBatch = createAsyncThunk(
  "upcomingLaunches/fetchBatch",
  async (batch: number) => {
    const response: UpcomingLaunch[] = await getUpcomingLaunchesBatch(batch);
    return response;
  }
);
