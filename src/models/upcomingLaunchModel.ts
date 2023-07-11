import {LaunchWindow, Pad, Mission, Launcher} from '.';

export interface UpcomingLaunch {
  id: string;
  name: string;
  date: Date;
  window: LaunchWindow;
  pad: Pad;
  mission: Mission;
  launcher: Launcher;
  image?: string;
}
