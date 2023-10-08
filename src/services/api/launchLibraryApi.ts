import {
  AgencyCommonLl2DTO,
  LaunchCommonLl2DTO,
  LaunchStatusLl2DTO,
  PadLl2DTO,
  PaginatedListLl2DTO,
} from '../../dtos';
import { FetchController } from '../../models';
import { getFetchController } from '../fetch';

const BASE_URL: string = 'https://lldev.thespacedevs.com/2.2.0';

export function getLaunches(
  limit: number,
  offset: number,
): FetchController<PaginatedListLl2DTO<LaunchCommonLl2DTO>> {
  const params = { limit, offset, window_start__gte: new Date().toISOString() };
  return getFetchController(`${BASE_URL}/launch/upcoming/`, params);
}

export function getLaunchStatuses(
  limit: number,
  offset: number,
): FetchController<PaginatedListLl2DTO<LaunchStatusLl2DTO>> {
  return getFetchController(`${BASE_URL}/config/launchstatus/`, {
    limit,
    offset,
  });
}

export function getAgencies(
  limit: number,
  offset: number,
): FetchController<PaginatedListLl2DTO<AgencyCommonLl2DTO>> {
  return getFetchController(`${BASE_URL}/agencies/`, { limit, offset });
}

export function getPads(
  limit: number,
  offset: number,
): FetchController<PaginatedListLl2DTO<PadLl2DTO>> {
  return getFetchController(`${BASE_URL}/pad/`, { limit, offset });
}

export function getDetailedLaunch(
  id: string,
): FetchController<LaunchCommonLl2DTO> {
  return getFetchController(`${BASE_URL}/launch/${id}/`);
}
