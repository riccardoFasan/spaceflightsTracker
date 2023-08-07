import {
  getLaunches,
  getDetailedLaunch,
  getArticles,
  mapArticleSnToArticle,
  mapLaunchLl2ToLaunch,
  mapLaunchLl2ToDetailedLaunch,
} from ".";
import { ArticleSnDTO, LaunchCommonLl2DTO, PaginatedListLl2DTO } from "../dtos";
import { Article, Launch, LaunchDetailed, ListBatch } from "../models";
import { ApiController } from "../models/apiControllerModel";
import { FetchController } from "../models/fetchControllerModel";

export function getLaunchesBatch(
  batch: number,
  batchSize: number
): ApiController<ListBatch<Launch>> {
  const { limit, offset } = getOffsetAndLimit(batch, batchSize);
  const controller: FetchController<PaginatedListLl2DTO<LaunchCommonLl2DTO>> =
    getLaunches(limit, offset);
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

export function getArticlesBatch(
  batch: number,
  batchSize: number
): ApiController<ListBatch<Article>> {
  const { limit, offset } = getOffsetAndLimit(batch, batchSize);
  const controller: FetchController<PaginatedListLl2DTO<ArticleSnDTO>> =
    getArticles(limit, offset);
  return {
    cancel: controller.abort,
    fetch: async () => {
      const response = await controller.fetch();
      return {
        totalCount: response.count,
        batch,
        results: response.results.map((result) =>
          mapArticleSnToArticle(result)
        ),
      };
    },
  };
}

function getOffsetAndLimit(
  batch: number,
  batchSize: number
): { limit: number; offset: number } {
  const offset: number = (batch - 1) * batchSize;
  const limit: number = batchSize;
  return { limit, offset };
}
