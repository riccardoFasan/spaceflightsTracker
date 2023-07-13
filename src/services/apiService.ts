import {
  getUpcomingLaunches,
  mapArticleSnToArticle,
  mapLaunchLl2ToLaunch,
} from ".";
import { ArticleSnDTO, LaunchCommonLl2DTO, PaginatedListLl2DTO } from "../dtos";
import { Article, UpcomingLaunch } from "../models";
import { getArticles } from "./spaceNewsService";

export async function getUpcomingLaunchesBatch(
  batch: number,
  bacthSize: number,
  maxBatches: number
): Promise<UpcomingLaunch[]> {
  if (batch > maxBatches) return [];
  const { limit, offset } = getOffetAndLimit(batch, bacthSize);
  const response: PaginatedListLl2DTO<LaunchCommonLl2DTO> =
    await getUpcomingLaunches(limit, offset);
  return response.results.map((result) => mapLaunchLl2ToLaunch(result));
}

export async function getArticlesBatch(
  batch: number,
  bacthSize: number,
  maxBatches: number
): Promise<Article[]> {
  if (batch > maxBatches) return [];
  const { limit, offset } = getOffetAndLimit(batch, bacthSize);
  const response: PaginatedListLl2DTO<ArticleSnDTO> = await getArticles(
    limit,
    offset
  );
  return response.results.map((result) => mapArticleSnToArticle(result));
}

function getOffetAndLimit(
  batch: number,
  bacthSize: number
): { limit: number; offset: number } {
  const offset: number = (batch - 1) * bacthSize;
  const limit: number = bacthSize;
  return { limit, offset };
}
