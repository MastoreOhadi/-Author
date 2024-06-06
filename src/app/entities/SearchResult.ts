export interface SearchResult<T> {
    items: T[];
    total: number;
    hasMoreItems:boolean;
}