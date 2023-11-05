import {
  ArticleSnDTO,
  BlogSnDTO,
  PaginatedListSnDTO,
  ReportSnDTO,
} from '../../dtos';
import { FetchController, SearchCriteria } from '../../models';
import { getFetchController } from '../fetch';

const BASE_URL: string = 'https://api.spaceflightnewsapi.net/v4';

export function getArticles(
  searchCriteria: SearchCriteria,
): FetchController<PaginatedListSnDTO<ArticleSnDTO>> {
  const params = { ...searchCriteria.pagination, ...searchCriteria.filters };
  return getFetchController(`${BASE_URL}/articles/`, params);
}

export function getReports(
  searchCriteria: SearchCriteria,
): FetchController<PaginatedListSnDTO<ReportSnDTO>> {
  const params = { ...searchCriteria.pagination, ...searchCriteria.filters };
  return getFetchController(`${BASE_URL}/reports/`, params);
}

export function getBlogs(
  searchCriteria: SearchCriteria,
): FetchController<PaginatedListSnDTO<BlogSnDTO>> {
  const params = { ...searchCriteria.pagination, ...searchCriteria.filters };
  return getFetchController(`${BASE_URL}/blogs/`, params);
}
