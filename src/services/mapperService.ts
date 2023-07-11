import { LaunchCommonLl2DTO, PadLl2DTO } from "../dtos";
import { LaunchWindow, Pad, UpcomingLaunch } from "../models";

export function mapLaunchLl2ToLaunch(
  launchLl2: LaunchCommonLl2DTO
): UpcomingLaunch {
  return {
    id: launchLl2.id.toString(),
    name: launchLl2.name,
    image: launchLl2.image,
    window: mapLaunchWindow(launchLl2.window_start, launchLl2.window_end),
    pad: mapPad(launchLl2.pad),
  };
}

function mapPad(pad: PadLl2DTO): Pad | undefined {
  if (!pad.name || !pad.location.timezone_name) return;
  return {
    id: pad.id.toString(),
    name: pad.name,
    timezone: pad.location.timezone_name,
  };
}

function mapLaunchWindow(
  start?: string,
  end?: string
): LaunchWindow | undefined {
  if (!start || !end) return;
  return { start, end };
}
