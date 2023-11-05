import {
  AgencyCommonLl2DTO,
  LaunchCommonLl2DTO,
  LaunchStatusLl2DTO,
  PadLl2DTO,
  PaginatedListLl2DTO,
} from '../../dtos';
import { FetchController, SearchCriteria } from '../../models';
import { getFetchController } from '../fetch';

const BASE_URL: string = 'https://lldev.thespacedevs.com/2.2.0';

export function getLaunches(
  searchCriteria: SearchCriteria,
): FetchController<PaginatedListLl2DTO<LaunchCommonLl2DTO>> {
  const params = {
    ...searchCriteria.pagination,
    ...searchCriteria.filters,
  };
  return getFetchController(`${BASE_URL}/launch/upcoming/`, params);
}

export function getLaunchStatuses(
  searchCriteria: SearchCriteria,
): FetchController<PaginatedListLl2DTO<LaunchStatusLl2DTO>> {
  const params = { ...searchCriteria.pagination, ...searchCriteria.filters };
  return getFetchController(`${BASE_URL}/config/launchstatus/`, params);
}

export function getAgencies(
  searchCriteria: SearchCriteria,
): FetchController<PaginatedListLl2DTO<AgencyCommonLl2DTO>> {
  const params = { ...searchCriteria.pagination, ...searchCriteria.filters };
  return getFetchController(`${BASE_URL}/agencies/`, params);
}

export function getPads(
  searchCriteria: SearchCriteria,
): FetchController<PaginatedListLl2DTO<PadLl2DTO>> {
  const params = { ...searchCriteria.pagination, ...searchCriteria.filters };
  return getFetchController(`${BASE_URL}/pad/`, params);
}

export function getDetailedLaunch(
  id: string,
): FetchController<LaunchCommonLl2DTO> {
  return getFetchController(`${BASE_URL}/launch/${id}/`);
}
