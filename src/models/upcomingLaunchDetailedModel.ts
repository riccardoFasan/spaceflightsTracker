import { LaunchWindow, Pad, Mission, Launcher } from ".";
import { UpcomingLaunchStatus } from "../enums";

export interface UpcomingLaunchDetailed {
  id: string;
  name: string;
  date: Date;
  status: UpcomingLaunchStatus;
  mission: Mission;
  launcher: Launcher;
  window?: LaunchWindow;
  pad?: Pad;
  image?: string;
}
