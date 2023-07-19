import { LaunchWindow, Pad, Mission, Launcher } from ".";
import { LaunchStatus } from "../enums";

export interface LaunchDetailed {
  id: string;
  name: string;
  status: LaunchStatus;
  launcher?: Launcher;
  mission?: Mission;
  window?: LaunchWindow;
  pad?: Pad;
  image?: string;
}
