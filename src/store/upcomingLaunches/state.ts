import { UpcomingLaunch } from "../../models";
import { ListState } from "../listState";

export type UpcomingLaunchesState = ListState<UpcomingLaunch>;

export const INITIAL_UPCOMING_LAUNCHES_STATE: UpcomingLaunchesState = {
  items: [],
  currentBatch: 0,
  totalCount: 0,
  loading: false,
  refreshing: false,
};
