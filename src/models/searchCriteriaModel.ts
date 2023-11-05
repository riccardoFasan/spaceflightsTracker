export interface SearchCriteria {
  pagination: {
    offset: number;
    limit: number;
  };
  filters?: object;
}
