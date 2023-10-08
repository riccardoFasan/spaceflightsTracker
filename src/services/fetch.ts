import axios, { AxiosResponse } from 'axios';
import { FetchController } from '../models';

export function getFetchController<T>(
  endpoint: string,
  params?: object,
): FetchController<T> {
  const abortController: AbortController = new AbortController();
  const response: Promise<AxiosResponse<T>> = axios.get<T>(endpoint, {
    params,
    signal: abortController.signal,
  });
  return {
    abort: () => abortController.abort(),
    fetch: async () => (await response).data,
  };
}
