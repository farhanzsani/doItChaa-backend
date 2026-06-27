"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = authenticate;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../../config/env");
const AppError_1 = require("../errors/AppError");
function authenticate(req, _res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new AppError_1.UnauthorizedError('No token provided');
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
        throw new AppError_1.UnauthorizedError('No token provided');
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, env_1.env.JWT_SECRET);
        req.user = { id: decoded.id, email: decoded.email };
        next();
    }
    catch {
        throw new AppError_1.UnauthorizedError('Invalid or expired token');
    }
}
//# sourceMappingURL=auth.middleware.js.map