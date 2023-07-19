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

export async function getLaunchesBatch(
  batch: number,
  bacthSize: number
): Promise<ListBatch<Launch>> {
  const { limit, offset } = getOffetAndLimit(batch, bacthSize);
  const response: PaginatedListLl2DTO<LaunchCommonLl2DTO> = await getLaunches(
    limit,
    offset
  );
  return {
    totalCount: response.count,
    batch,
    results: response.results.map((result) => mapLaunchLl2ToLaunch(result)),
  };
}

export async function getLaunch(id: string): Promise<LaunchDetailed> {
  const response: LaunchCommonLl2DTO = await getDetailedLaunch(id);
  return mapLaunchLl2ToDetailedLaunch(response);
}

export async function getArticlesBatch(
  batch: number,
  bacthSize: number
): Promise<ListBatch<Article>> {
  const { limit, offset } = getOffetAndLimit(batch, bacthSize);
  const response: PaginatedListLl2DTO<ArticleSnDTO> = await getArticles(
    limit,
    offset
  );
  return {
    totalCount: response.count,
    batch,
    results: response.results.map((result) => mapArticleSnToArticle(result)),
  };
}

function getOffetAndLimit(
  batch: number,
  bacthSize: number
): { limit: number; offset: number } {
  const offset: number = (batch - 1) * bacthSize;
  const limit: number = bacthSize;
  return { limit, offset };
}
