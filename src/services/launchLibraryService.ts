import axios, { AxiosResponse } from "axios";
import { LaunchCommonLl2DTO, PaginatedListLl2DTO } from "../dtos";

const ENDPOINT: string = "https://lldev.thespacedevs.com/2.2.0";

export async function getUpcomingLaunches(
  limit: number,
  offset: number
): Promise<PaginatedListLl2DTO<LaunchCommonLl2DTO>> {
  const params = {
    limit,
    offset,
  };
  const response: AxiosResponse<PaginatedListLl2DTO<LaunchCommonLl2DTO>> =
    await axios.get<PaginatedListLl2DTO<LaunchCommonLl2DTO>>(
      `${ENDPOINT}/launch/upcoming/`,
      { params }
    );
  return response.data;
}
