import { configureStore } from "@reduxjs/toolkit";
import { upcomingLaunchesReducer } from "./upcomingLaunches";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: { upcomingLaunches: upcomingLaunchesReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
