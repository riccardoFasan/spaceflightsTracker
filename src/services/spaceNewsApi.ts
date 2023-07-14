import { ArticleSnDTO, PaginatedListSnDTO } from "../dtos";
import { axios, invalidateCache } from "../lib";
import { CacheAxiosResponse } from "axios-cache-interceptor";

const ENDPOINT: string = "https://api.spaceflightnewsapi.net/v4";
const CACHE_TTL: number = 60 * 60 * 1000; // 1 hours

const cacheIds: Set<string> = new Set<string>();

export async function getArticles(
  limit: number,
  offset: number
): Promise<PaginatedListSnDTO<ArticleSnDTO>> {
  const params = { limit, offset };
  const options = { params, cache: { ttl: CACHE_TTL } };
  const response: CacheAxiosResponse<PaginatedListSnDTO<ArticleSnDTO>> =
    await axios.get<PaginatedListSnDTO<ArticleSnDTO>>(
      `${ENDPOINT}/articles/`,
      options
    );
  cacheIds.add(response.request.id);
  return response.data;
}

export async function invalidateArticleListCache(): Promise<void> {
  for (const id of cacheIds) {
    await invalidateCache(id);
  }
}
