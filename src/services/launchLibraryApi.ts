import { AxiosResponse } from "axios";
import { LaunchCommonLl2DTO, PaginatedListLl2DTO } from "../dtos";
import axios from "axios";

const ENDPOINT: string = "https://lldev.thespacedevs.com/2.2.0";

export async function getLaunches(
  limit: number,
  offset: number
): Promise<PaginatedListLl2DTO<LaunchCommonLl2DTO>> {
  const params = { limit, offset, window_start__gte: new Date().toISOString() };
  const response: AxiosResponse<PaginatedListLl2DTO<LaunchCommonLl2DTO>> =
    await axios.get<PaginatedListLl2DTO<LaunchCommonLl2DTO>>(
      `${ENDPOINT}/launch/upcoming/`,
      { params }
    );
  return response.data;
}

export async function getDetailedLaunch(
  id: string
): Promise<LaunchCommonLl2DTO> {
  const response: AxiosResponse<LaunchCommonLl2DTO> =
    await axios.get<LaunchCommonLl2DTO>(`${ENDPOINT}/launch/${id}/`);
  return response.data;
}
