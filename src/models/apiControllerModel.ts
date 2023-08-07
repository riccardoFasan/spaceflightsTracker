export interface ApiController<T> {
  cancel: () => void;
  fetch: () => Promise<T>;
}
