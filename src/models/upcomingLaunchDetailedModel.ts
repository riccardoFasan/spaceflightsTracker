import { LaunchWindow, Pad, Mission, Launcher } from ".";

export interface UpcomingLaunchDetailed {
  id: string;
  name: string;
  date: Date;
  window: LaunchWindow;
  pad: Pad;
  mission: Mission;
  launcher: Launcher;
  image?: string;
}
