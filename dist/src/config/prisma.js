"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require("../../generated/prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const globalForPrisma = globalThis;
function createPrismaClient() {
    const connectionString = process.env['DATABASE_URL'];
    if (!connectionString) {
        throw new Error('Missing required environment variable: DATABASE_URL');
    }
    const adapter = new adapter_pg_1.PrismaPg({ connectionString });
    return new client_1.PrismaClient({
        adapter,
        log: process.env['NODE_ENV'] === 'development'
            ? ['query', 'error', 'warn']
            : ['error'],
    });
}
exports.prisma = globalForPrisma.prisma ?? createPrismaClient();
if (process.env['NODE_ENV'] !== 'production') {
    globalForPrisma.prisma = exports.prisma;
}
//# sourceMappingURL=prisma.js.map