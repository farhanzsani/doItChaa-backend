import './config/env'; // Must be first — validates env vars on startup
import app from './app';
import { env } from './config/env';
import { prisma } from './config/prisma';

async function bootstrap() {
  try {
    // Verify database connection
    await prisma.$connect();
    console.log('[DB] Connected to database successfully');

    const server = app.listen(env.PORT, () => {
      console.log(`[SERVER] Do It Cha API running on port ${env.PORT}`);
      console.log(`[SERVER] Environment: ${env.NODE_ENV}`);
      console.log(`[SERVER] Health check: http://localhost:${env.PORT}/health`);
    });

    // Graceful shutdown
    const shutdown = async (signal: string) => {
      console.log(`[SERVER] Received ${signal}, shutting down gracefully...`);
      server.close(async () => {
        await prisma.$disconnect();
        console.log('[DB] Database connection closed');
        process.exit(0);
      });
    };

    process.on('SIGTERM', () => shutdown('SIGTERM'));
    process.on('SIGINT', () => shutdown('SIGINT'));
  } catch (error) {
    console.error('[SERVER] Failed to start:', error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

bootstrap();
