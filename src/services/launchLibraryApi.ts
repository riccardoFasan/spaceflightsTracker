import { AxiosResponse } from "axios";
import { LaunchCommonLl2DTO, PaginatedListLl2DTO } from "../dtos";
import { axios, invalidateCache } from "../lib";

const ENDPOINT: string = "https://lldev.thespacedevs.com/2.2.0";
const CACHE_TTL: number = 60 * 60 * 1000 * 2; // 2 hours

const cacheIds: Set<string> = new Set<string>();

export async function getUpcomingLaunches(
  limit: number,
  offset: number
): Promise<PaginatedListLl2DTO<LaunchCommonLl2DTO>> {
  const params = { limit, offset };
  const options = { params, cache: { ttl: CACHE_TTL } };
  const response: AxiosResponse<PaginatedListLl2DTO<LaunchCommonLl2DTO>> =
    await axios.get<PaginatedListLl2DTO<LaunchCommonLl2DTO>>(
      `${ENDPOINT}/launch/upcoming/`,
      options
    );
  return response.data;
}

export async function invalidateLaunchListCache(): Promise<void> {
  for (const id of cacheIds) {
    await invalidateCache(id);
  }
}
