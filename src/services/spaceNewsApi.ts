import axios, { AxiosResponse } from 'axios';
import {
  ArticleSnDTO,
  BlogSnDTO,
  PaginatedListSnDTO,
  ReportSnDTO,
} from '../dtos';
import { FetchController } from '../models';

const ENDPOINT: string = 'https://api.spaceflightnewsapi.net/v4';

export function getArticles(
  limit: number,
  offset: number,
): FetchController<PaginatedListSnDTO<ArticleSnDTO>> {
  return getNews(limit, offset, 'articles');
}

export function getReports(
  limit: number,
  offset: number,
): FetchController<PaginatedListSnDTO<ReportSnDTO>> {
  return getNews(limit, offset, 'reports');
}

export function getBlogs(
  limit: number,
  offset: number,
): FetchController<PaginatedListSnDTO<BlogSnDTO>> {
  return getNews(limit, offset, 'blogs');
}

function getNews(
  limit: number,
  offset: number,
  path: string,
): FetchController<PaginatedListSnDTO<ArticleSnDTO | ReportSnDTO | BlogSnDTO>> {
  const abortController: AbortController = new AbortController();
  const params = { limit, offset };
  const response: Promise<AxiosResponse<PaginatedListSnDTO<BlogSnDTO>>> =
    axios.get<PaginatedListSnDTO<BlogSnDTO>>(`${ENDPOINT}/${path}/`, {
      params,
      signal: abortController.signal,
    });
  return {
    abort: () => abortController.abort(),
    fetch: async () => (await response).data,
  };
}
