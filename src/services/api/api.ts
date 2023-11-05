import {
  mapArticleSnToArticle,
  mapReportSnToReport,
  mapBlogSnToBlog,
} from './spaceNewsApiMapper';
import {
  AgencyCommonLl2DTO,
  ArticleSnDTO,
  BlogSnDTO,
  LaunchCommonLl2DTO,
  LaunchStatusLl2DTO,
  PadLl2DTO,
  PaginatedListLl2DTO,
  ReportSnDTO,
} from '../../dtos';
import {
  Article,
  Blog,
  Launch,
  LaunchDetailed,
  ListBatch,
  Report,
  FetchController,
  ApiController,
  Pad,
  Company,
  LaunchStatusDetailed,
  SearchCriteria,
} from '../../models';
import {
  getAgencies,
  getDetailedLaunch,
  getLaunchStatuses,
  getLaunches,
  getPads,
} from './launchLibraryApi';
import { getArticles, getBlogs, getReports } from './spaceNewsApi';
import {
  mapAgencyLl2ToCompany,
  mapLaunchLl2ToDetailedLaunch,
  mapLaunchLl2ToLaunch,
  mapLaunchStatusLl2ToStatusDetailed,
  mapPadLl2ToPad,
} from './launchLibraryApiMapper';

export function getLaunchesBatch(
  batch: number,
  batchSize: number,
  filters?: object,
): ApiController<ListBatch<Launch>> {
  return getBatch<Launch, LaunchCommonLl2DTO>(
    getLaunches,
    mapLaunchLl2ToLaunch,
    batch,
    batchSize,
    filters,
  );
}

export function getLaunchStatusesBatch(
  batch: number,
  batchSize: number,
  filters?: object,
): ApiController<ListBatch<LaunchStatusDetailed>> {
  return getBatch<LaunchStatusDetailed, LaunchStatusLl2DTO>(
    getLaunchStatuses,
    mapLaunchStatusLl2ToStatusDetailed,
    batch,
    batchSize,
    filters,
  );
}

export function getArticlesBatch(
  batch: number,
  batchSize: number,
  filters?: object,
): ApiController<ListBatch<Article>> {
  return getBatch<Article, ArticleSnDTO>(
    getArticles,
    mapArticleSnToArticle,
    batch,
    batchSize,
    filters,
  );
}

export function getReportsBatch(
  batch: number,
  batchSize: number,
  filters?: object,
): ApiController<ListBatch<Report>> {
  return getBatch<Report, ReportSnDTO>(
    getReports,
    mapReportSnToReport,
    batch,
    batchSize,
    filters,
  );
}

export function getBlogsBatch(
  batch: number,
  batchSize: number,
): ApiController<ListBatch<Blog>> {
  return getBatch<Blog, BlogSnDTO>(getBlogs, mapBlogSnToBlog, batch, batchSize);
}
export function getCompaniesBatch(
  batch: number,
  batchSize: number,
  filters?: object,
): ApiController<ListBatch<Company>> {
  return getBatch<Company, AgencyCommonLl2DTO>(
    getAgencies,
    mapAgencyLl2ToCompany,
    batch,
    batchSize,
    filters,
  );
}

export function getPadsBatch(
  batch: number,
  batchSize: number,
  filters?: object,
): ApiController<ListBatch<Pad>> {
  return getBatch<Pad, PadLl2DTO>(
    getPads,
    mapPadLl2ToPad,
    batch,
    batchSize,
    filters,
  );
}

export function getLaunch(id: string): ApiController<LaunchDetailed> {
  const controller: FetchController<LaunchCommonLl2DTO> = getDetailedLaunch(id);
  return {
    cancel: controller.abort,
    fetch: async () => {
      const response = await controller.fetch();
      return mapLaunchLl2ToDetailedLaunch(response);
    },
  };
}

function getBatch<T, U>(
  get: (
    searchCriteria: SearchCriteria,
  ) => FetchController<PaginatedListLl2DTO<U>>,
  map: (dto: U) => T,
  batch: number,
  batchSize: number,
  filters?: object,
): ApiController<ListBatch<T>> {
  const { limit, offset } = getOffsetAndLimit(batch, batchSize);
  const controller = get({
    pagination: { limit, offset },
    filters: filters || {},
  });
  return {
    cancel: controller.abort,
    fetch: async () => {
      const response = await controller.fetch();
      return {
        totalCount: response.count,
        batch,
        results: response.results.map(map),
      };
    },
  };
}

function getOffsetAndLimit(
  batch: number,
  batchSize: number,
): { limit: number; offset: number } {
  const offset: number = (batch - 1) * batchSize;
  const limit: number = batchSize;
  return { limit, offset };
}
