import { configureStore } from "@reduxjs/toolkit";
import { upcomingLaunchesReducer } from "./upcomingLaunches";

export const store = configureStore({
  reducer: { upcomingLaunches: upcomingLaunchesReducer },
});

export type RootState = ReturnType<typeof store.getState>;
