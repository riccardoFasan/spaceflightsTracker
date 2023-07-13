import axios, { AxiosResponse } from "axios";
import { ArticleSnDTO, PaginatedListSnDTO } from "../dtos";

const ENDPOINT: string = "https://api.spaceflightnewsapi.net/v4";

export async function getArticles(
  limit: number,
  offset: number
): Promise<PaginatedListSnDTO<ArticleSnDTO>> {
  const params = {
    limit,
    offset,
  };
  const response: AxiosResponse<PaginatedListSnDTO<ArticleSnDTO>> =
    await axios.get<PaginatedListSnDTO<ArticleSnDTO>>(`${ENDPOINT}/articles/`, {
      params,
    });
  return response.data;
}
