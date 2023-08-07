export interface FetchController<T> {
  abort: () => void;
  fetch: () => Promise<T>;
}
