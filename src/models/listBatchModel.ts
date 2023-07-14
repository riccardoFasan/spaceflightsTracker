export interface ListBatch<T> {
  results: T[];
  batch: number;
  totalCount: number;
}
