export interface PaginatedListSnDTO<T> {
  count: number;
  results: T[];
  next: string | null;
  previous: string | null;
}
