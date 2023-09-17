import axios, { AxiosResponse } from "axios";
import { LaunchCommonLl2DTO, PaginatedListLl2DTO } from "../dtos";
import { FetchController } from "../models";


const ENDPOINT: string = 'https://lldev.thespacedevs.com/2.2.0';

export function getLaunches(
  limit: number,
  offset: number,
): FetchController<PaginatedListLl2DTO<LaunchCommonLl2DTO>> {
  const abortController: AbortController = new AbortController();
  const params = { limit, offset, window_start__gte: new Date().toISOString() };
  const response: Promise<AxiosResponse<PaginatedListLl2DTO<LaunchCommonLl2DTO>>> = axios.get<
    PaginatedListLl2DTO<LaunchCommonLl2DTO>
  >(`${ENDPOINT}/launch/upcoming/`, { params, signal: abortController.signal });
  return {
    abort: () => abortController.abort(),
    fetch: async () => (await response).data,
  };
}


export function getDetailedLaunch(
  id: string,
): FetchController<LaunchCommonLl2DTO> {
  const abortController: AbortController = new AbortController();
  const response: Promise<AxiosResponse<LaunchCommonLl2DTO>> = axios.get<LaunchCommonLl2DTO>(
    `${ENDPOINT}/launch/${id}/`,
    {
      signal: abortController.signal,
    },
  );
  return {
    abort: () => abortController.abort(),
    fetch: async () => (await response).data,
  };
}
