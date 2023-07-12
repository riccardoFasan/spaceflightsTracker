import { getUpcomingLaunches, mapLaunchLl2ToLaunch } from ".";
import { LaunchCommonLl2DTO } from "../dtos";
import { UpcomingLaunch } from "../models";
import { PaginatedListLl2DTO } from "../dtos/launchLibrary/paginatedListLl2DTO";

const BATCH_SIZE: number = 20;

export async function getUpcomingLaunchesBatch(
  batch: number
): Promise<UpcomingLaunch[]> {
  const { limit, offset } = getOffetAndLimit(batch);
  const response: PaginatedListLl2DTO<LaunchCommonLl2DTO> =
    await getUpcomingLaunches(limit, offset);
  return response.results.map((result) => mapLaunchLl2ToLaunch(result));
}

function getOffetAndLimit(batch: number): { limit: number; offset: number } {
  const offset: number = (batch - 1) * BATCH_SIZE;
  const limit: number = BATCH_SIZE;
  return { limit, offset };
}
