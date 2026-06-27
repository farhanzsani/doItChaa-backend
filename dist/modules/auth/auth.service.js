"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = registerUser;
exports.loginUser = loginUser;
exports.getCurrentUser = getCurrentUser;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = require("../../config/prisma");
const env_1 = require("../../config/env");
const AppError_1 = require("../../common/errors/AppError");
const constants_1 = require("../../common/constants");
async function registerUser(input) {
    const existingUser = await prisma_1.prisma.user.findUnique({
        where: { email: input.email },
    });
    if (existingUser) {
        throw new AppError_1.ConflictError('Email is already registered');
    }
    const hashedPassword = await bcrypt_1.default.hash(input.password, env_1.env.BCRYPT_SALT_ROUNDS);
    const user = await prisma_1.prisma.user.create({
        data: {
            email: input.email,
            password: hashedPassword,
            categories: {
                create: constants_1.DEFAULT_CATEGORIES.map((name) => ({ name })),
            },
        },
        select: {
            id: true,
            email: true,
            createdAt: true,
        },
    });
    const token = generateToken(user.id, user.email);
    return { user, token };
}
async function loginUser(input) {
    const user = await prisma_1.prisma.user.findUnique({
        where: { email: input.email },
    });
    if (!user) {
        throw new AppError_1.UnauthorizedError('Invalid email or password');
    }
    const isPasswordValid = await bcrypt_1.default.compare(input.password, user.password);
    if (!isPasswordValid) {
        throw new AppError_1.UnauthorizedError('Invalid email or password');
    }
    const token = generateToken(user.id, user.email);
    return {
        user: {
            id: user.id,
            email: user.email,
            createdAt: user.createdAt,
        },
        token,
    };
}
async function getCurrentUser(userId) {
    const user = await prisma_1.prisma.user.findUnique({
        where: { id: userId },
        select: {
            id: true,
            email: true,
            createdAt: true,
        },
    });
    if (!user) {
        throw new AppError_1.UnauthorizedError('User not found');
    }
    return user;
}
function generateToken(userId, email) {
    return jsonwebtoken_1.default.sign({ id: userId, email }, env_1.env.JWT_SECRET, { expiresIn: env_1.env.JWT_EXPIRES_IN });
}
//# sourceMappingURL=auth.service.js.map