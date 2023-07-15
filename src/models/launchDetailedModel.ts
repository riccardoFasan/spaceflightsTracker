import { LaunchWindow, Pad, Mission, Launcher } from ".";
import { LaunchStatus } from "../enums";

export interface LaunchDetailed {
  id: string;
  name: string;
  date: Date;
  status: LaunchStatus;
  mission: Mission;
  launcher: Launcher;
  window?: LaunchWindow;
  pad?: Pad;
  image?: string;
}
