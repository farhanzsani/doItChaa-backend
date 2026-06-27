"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
exports.notFoundHandler = notFoundHandler;
const zod_1 = require("zod");
const AppError_1 = require("../errors/AppError");
const response_1 = require("../utils/response");
const env_1 = require("../../config/env");
function errorHandler(err, _req, res, _next) {
    // Zod validation error (unhandled)
    if (err instanceof zod_1.ZodError) {
        const errors = err.issues.map((e) => ({
            field: e.path.join('.'),
            message: e.message,
        }));
        (0, response_1.sendError)(res, 'Validation failed', 422, errors);
        return;
    }
    // Operational errors (known, expected)
    if (err instanceof AppError_1.AppError) {
        (0, response_1.sendError)(res, err.message, err.statusCode);
        return;
    }
    // Unknown errors
    if (env_1.env.isDevelopment) {
        console.error('[ERROR]', err);
    }
    (0, response_1.sendError)(res, 'Internal Server Error', 500);
}
function notFoundHandler(_req, res) {
    (0, response_1.sendError)(res, 'Route not found', 404);
}
//# sourceMappingURL=error.middleware.js.map