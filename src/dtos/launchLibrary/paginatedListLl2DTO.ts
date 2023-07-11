export interface PaginatedListLl2DTO<T> {
  count: number;
  results: T[];
  next: string | null;
  previous: string | null;
}
