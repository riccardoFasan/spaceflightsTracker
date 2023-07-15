import { LaunchWindow, Pad } from ".";
import { LaunchStatus } from "../enums";
export interface Launch {
  id: string;
  name: string;
  status: LaunchStatus;
  pad?: Pad;
  window?: LaunchWindow;
  image?: string;
}
