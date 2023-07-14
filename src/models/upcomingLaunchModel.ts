import { LaunchWindow, Pad } from ".";
import { UpcomingLaunchStatus } from "../enums";
export interface UpcomingLaunch {
  id: string;
  name: string;
  status: UpcomingLaunchStatus;
  pad?: Pad;
  window?: LaunchWindow;
  image?: string;
}
