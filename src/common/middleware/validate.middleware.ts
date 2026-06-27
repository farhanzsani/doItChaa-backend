import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';
import { sendError } from '../utils/response';

type ValidateTarget = 'body' | 'query' | 'params';

export function validate(
  schema: ZodSchema,
  target: ValidateTarget = 'body'
) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req[target]);

    if (!result.success) {
      const errors = result.error.issues.map((e) => ({
        field: e.path.join('.'),
        message: e.message,
      }));

      sendError(res, 'Validation failed', 422, errors);
      return;
    }

    req[target] = result.data;
    next();
  };
}
