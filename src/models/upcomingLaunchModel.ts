import { LaunchWindow, Pad } from ".";

export interface UpcomingLaunch {
  id: string;
  name: string;
  pad?: Pad;
  window?: LaunchWindow;
  image?: string;
}
