"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./config/env"); // Must be first — validates env vars on startup
const app_1 = __importDefault(require("./app"));
const env_1 = require("./config/env");
const prisma_1 = require("./config/prisma");
async function bootstrap() {
    try {
        // Verify database connection
        await prisma_1.prisma.$connect();
        console.log('[DB] Connected to database successfully');
        const server = app_1.default.listen(env_1.env.PORT, () => {
            console.log(`[SERVER] Do It Cha API running on port ${env_1.env.PORT}`);
            console.log(`[SERVER] Environment: ${env_1.env.NODE_ENV}`);
            console.log(`[SERVER] Health check: http://localhost:${env_1.env.PORT}/health`);
        });
        // Graceful shutdown
        const shutdown = async (signal) => {
            console.log(`[SERVER] Received ${signal}, shutting down gracefully...`);
            server.close(async () => {
                await prisma_1.prisma.$disconnect();
                console.log('[DB] Database connection closed');
                process.exit(0);
            });
        };
        process.on('SIGTERM', () => shutdown('SIGTERM'));
        process.on('SIGINT', () => shutdown('SIGINT'));
    }
    catch (error) {
        console.error('[SERVER] Failed to start:', error);
        await prisma_1.prisma.$disconnect();
        process.exit(1);
    }
}
bootstrap();
//# sourceMappingURL=server.js.map