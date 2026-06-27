"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function requireEnv(key) {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Missing required environment variable: ${key}`);
    }
    return value;
}
function optionalEnv(key, defaultValue) {
    return process.env[key] ?? defaultValue;
}
exports.env = {
    NODE_ENV: optionalEnv('NODE_ENV', 'development'),
    PORT: parseInt(optionalEnv('PORT', '3000'), 10),
    DATABASE_URL: requireEnv('DATABASE_URL'),
    JWT_SECRET: requireEnv('JWT_SECRET'),
    JWT_EXPIRES_IN: optionalEnv('JWT_EXPIRES_IN', '7d'),
    BCRYPT_SALT_ROUNDS: parseInt(optionalEnv('BCRYPT_SALT_ROUNDS', '12'), 10),
    ADMIN_PASSWORD: requireEnv('ADMIN_PASSWORD'),
    SESSION_SECRET: requireEnv('SESSION_SECRET'),
    get isDevelopment() {
        return this.NODE_ENV === 'development';
    },
    get isProduction() {
        return this.NODE_ENV === 'production';
    },
};
//# sourceMappingURL=env.js.map