export interface ListState<T> {
  items: T[];
  currentBatch: number;
  loading: boolean;
  refreshing: boolean;
}
