export interface ListState<T> {
    items: T[];
    totalCount: number;
    loading: boolean;
    error?: string;
}