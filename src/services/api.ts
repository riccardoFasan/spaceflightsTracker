import {
  getLaunches,
  getDetailedLaunch,
  getArticles,
  getReports,
  getBlogs,
  getSpaceEvents,
  mapArticleSnToArticle,
  mapReportSnToReport,
  mapBlogSnToBlog,
  mapLaunchLl2ToLaunch,
  mapLaunchLl2ToDetailedLaunch,
  mapEventLl2ToEvent,
} from '.';
import {
  ArticleSnDTO,
  BlogSnDTO,
  SpaceEventLl2DTO,
  LaunchCommonLl2DTO,
  PaginatedListLl2DTO,
  ReportSnDTO,
} from '../dtos';
import {
  Article,
  Blog,
  Launch,
  LaunchDetailed,
  ListBatch,
  Report,
  FetchController,
  ApiController,
  SpaceEvent,
} from '../models';

export function getLaunchesBatch(
  batch: number,
  batchSize: number,
): ApiController<ListBatch<Launch>> {
  const { limit, offset } = getOffsetAndLimit(batch, batchSize);
  const controller: FetchController<PaginatedListLl2DTO<LaunchCommonLl2DTO>> = getLaunches(
    limit,
    offset,
  );
  return {
    cancel: controller.abort,
    fetch: async () => {
      const response = await controller.fetch();
      return {
        totalCount: response.count,
        batch,
        results: response.results.map((result) => mapLaunchLl2ToLaunch(result)),
      };
    },
  };
}

export function getEventsBatch(
  batch: number,
  batchSize: number,
): ApiController<ListBatch<SpaceEvent>> {
  const { limit, offset } = getOffsetAndLimit(batch, batchSize);
  const controller: FetchController<PaginatedListLl2DTO<SpaceEventLl2DTO>> = getSpaceEvents(
    limit,
    offset,
  );
  return {
    cancel: controller.abort,
    fetch: async () => {
      const response = await controller.fetch();
      return {
        totalCount: response.count,
        batch,
        results: response.results.map((result) => mapEventLl2ToEvent(result)),
      };
    },
  };
}

export function getArticlesBatch(
  batch: number,
  batchSize: number,
): ApiController<ListBatch<Article>> {
  const { limit, offset } = getOffsetAndLimit(batch, batchSize);
  const controller: FetchController<PaginatedListLl2DTO<ArticleSnDTO>> = getArticles(limit, offset);
  return {
    cancel: controller.abort,
    fetch: async () => {
      const response = await controller.fetch();
      return {
        totalCount: response.count,
        batch,
        results: response.results.map((result) => mapArticleSnToArticle(result)),
      };
    },
  };
}

export function getReportsBatch(
  batch: number,
  batchSize: number,
): ApiController<ListBatch<Report>> {
  const { limit, offset } = getOffsetAndLimit(batch, batchSize);
  const controller: FetchController<PaginatedListLl2DTO<ReportSnDTO>> = getReports(limit, offset);
  return {
    cancel: controller.abort,
    fetch: async () => {
      const response = await controller.fetch();
      return {
        totalCount: response.count,
        batch,
        results: response.results.map((result) => mapReportSnToReport(result)),
      };
    },
  };
}

export function getBlogsBatch(batch: number, batchSize: number): ApiController<ListBatch<Blog>> {
  const { limit, offset } = getOffsetAndLimit(batch, batchSize);
  const controller: FetchController<PaginatedListLl2DTO<BlogSnDTO>> = getBlogs(limit, offset);
  return {
    cancel: controller.abort,
    fetch: async () => {
      const response = await controller.fetch();
      return {
        totalCount: response.count,
        batch,
        results: response.results.map((result) => mapBlogSnToBlog(result)),
      };
    },
  };
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

function getOffsetAndLimit(batch: number, batchSize: number): { limit: number; offset: number } {
  const offset: number = (batch - 1) * batchSize;
  const limit: number = batchSize;
  return { limit, offset };
}
