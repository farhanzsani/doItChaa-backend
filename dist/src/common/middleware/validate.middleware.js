"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = validate;
const response_1 = require("../utils/response");
function validate(schema, target = 'body') {
    return (req, res, next) => {
        const result = schema.safeParse(req[target]);
        if (!result.success) {
            const errors = result.error.issues.map((e) => ({
                field: e.path.join('.'),
                message: e.message,
            }));
            (0, response_1.sendError)(res, 'Validation failed', 422, errors);
            return;
        }
        req[target] = result.data;
        next();
    };
}
//# sourceMappingURL=validate.middleware.js.map