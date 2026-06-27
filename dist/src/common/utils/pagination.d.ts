export interface PaginationParams {
    page: number;
    limit: number;
    skip: number;
}
export interface PaginationMeta {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
}
export declare function parsePagination(pageStr?: string, limitStr?: string): PaginationParams;
export declare function buildPaginationMeta(total: number, page: number, limit: number): PaginationMeta;
