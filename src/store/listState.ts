export interface ListState<T> {
  items: T[];
  currentBatch: number;
  totalCount: number;
  loading: boolean;
  refreshing: boolean;
  error?: string;
}
