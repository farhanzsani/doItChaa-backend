import { Request } from 'express';

export interface AuthRequest extends Request {
  user?: {
    id: string;
    email: string;
  };
}

export interface PaginationQuery {
  page?: string;
  limit?: string;
}

export interface TaskFilterQuery extends PaginationQuery {
  status?: string;
  priority?: string;
  categoryId?: string;
  sortBy?: string;
  order?: string;
}
