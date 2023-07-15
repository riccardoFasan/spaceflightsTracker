import { getLaunches, mapArticleSnToArticle, mapLaunchLl2ToLaunch } from ".";
import { ArticleSnDTO, LaunchCommonLl2DTO, PaginatedListLl2DTO } from "../dtos";
import { Article, Launch } from "../models";
import { ListBatch } from "../models/listBatchModel";
import { getArticles } from "./spaceNewsApi";

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
