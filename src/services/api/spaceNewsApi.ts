import {
  ArticleSnDTO,
  BlogSnDTO,
  PaginatedListSnDTO,
  ReportSnDTO,
} from '../../dtos';
import { FetchController } from '../../models';
import { getFetchController } from '../fetch';

const BASE_URL: string = 'https://api.spaceflightnewsapi.net/v4';

export function getArticles(
  limit: number,
  offset: number,
): FetchController<PaginatedListSnDTO<ArticleSnDTO>> {
  return getFetchController(`${BASE_URL}/articles/`, { limit, offset });
}

export function getReports(
  limit: number,
  offset: number,
): FetchController<PaginatedListSnDTO<ReportSnDTO>> {
  return getFetchController(`${BASE_URL}/reports/`, { limit, offset });
}

export function getBlogs(
  limit: number,
  offset: number,
): FetchController<PaginatedListSnDTO<BlogSnDTO>> {
  return getFetchController(`${BASE_URL}/blogs/`, { limit, offset });
}
