"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePagination = parsePagination;
exports.buildPaginationMeta = buildPaginationMeta;
const constants_1 = require("../constants");
function parsePagination(pageStr, limitStr) {
    const page = Math.max(1, parseInt(pageStr ?? String(constants_1.DEFAULT_PAGE), 10) || constants_1.DEFAULT_PAGE);
    const limit = Math.min(constants_1.MAX_LIMIT, Math.max(1, parseInt(limitStr ?? String(constants_1.DEFAULT_LIMIT), 10) || constants_1.DEFAULT_LIMIT));
    const skip = (page - 1) * limit;
    return { page, limit, skip };
}
function buildPaginationMeta(total, page, limit) {
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
//# sourceMappingURL=pagination.js.map