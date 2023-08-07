import axios, { AxiosResponse } from "axios";
import { ArticleSnDTO, PaginatedListSnDTO } from "../dtos";
import { FetchController } from "../models/fetchControllerModel";

const ENDPOINT: string = "https://api.spaceflightnewsapi.net/v4";

export function getArticles(
  limit: number,
  offset: number
): FetchController<PaginatedListSnDTO<ArticleSnDTO>> {
  const abortController: AbortController = new AbortController();
  const params = { limit, offset };
  const response: Promise<AxiosResponse<PaginatedListSnDTO<ArticleSnDTO>>> =
    axios.get<PaginatedListSnDTO<ArticleSnDTO>>(`${ENDPOINT}/articles/`, {
      params,
      signal: abortController.signal,
    });
  return {
    abort: () => abortController.abort(),
    fetch: async () => (await response).data,
  };
}
