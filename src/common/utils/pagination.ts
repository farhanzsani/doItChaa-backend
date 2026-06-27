import { DEFAULT_LIMIT, DEFAULT_PAGE, MAX_LIMIT } from '../constants';

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

export function parsePagination(
  pageStr?: string,
  limitStr?: string
): PaginationParams {
  const page = Math.max(1, parseInt(pageStr ?? String(DEFAULT_PAGE), 10) || DEFAULT_PAGE);
  const limit = Math.min(
    MAX_LIMIT,
    Math.max(1, parseInt(limitStr ?? String(DEFAULT_LIMIT), 10) || DEFAULT_LIMIT)
  );
  const skip = (page - 1) * limit;
  return { page, limit, skip };
}

export function buildPaginationMeta(
  total: number,
  page: number,
  limit: number
): PaginationMeta {
  const totalPages = Math.ceil(total / limit);
  return {
    total,
    page,
    limit,
    totalPages,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
  };
}
