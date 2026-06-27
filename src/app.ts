import path from 'path';
import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import session from 'express-session';
import { errorHandler, notFoundHandler } from './common/middleware/error.middleware';
import { requireAdminSession } from './common/middleware/adminAuth.middleware';
import routes from './routes';
import { setupSwagger } from './config/swagger';
import { env } from './config/env';

const app = express();

// ─── Security Middleware ──────────────────────────────────────────────────────
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", 'cdn.jsdelivr.net', 'unpkg.com'],
        styleSrc: ["'self'", "'unsafe-inline'", 'cdn.jsdelivr.net', 'unpkg.com', 'fonts.googleapis.com'],
        imgSrc: ["'self'", 'data:', 'validator.swagger.io'],
        fontSrc: ["'self'", 'fonts.gstatic.com', 'data:'],
        connectSrc: ["'self'"],
      },
    },
  })
);

app.use(
  cors({
    origin: process.env['CORS_ORIGIN'] ?? '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// ─── Session ──────────────────────────────────────────────────────────────────
app.use(
  session({
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: env.isProduction,
      maxAge: 8 * 60 * 60 * 1000, // 8 hours
    },
  })
);

// ─── Body Parsing ─────────────────────────────────────────────────────────────
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// ─── Static Files (Landing Page & Admin Login) ──────────────────────────────
app.use(express.static(path.join(__dirname, '..', 'public')));

// ─── Admin Auth Routes ───────────────────────────────────────────────────────
app.post('/admin-login', (req: Request, res: Response): void => {
  const { password } = req.body as { password?: string };

  if (!password || password !== env.ADMIN_PASSWORD) {
    res.status(401).json({ success: false, message: 'Incorrect password' });
    return;
  }

  req.session.isAdmin = true;
  res.status(200).json({ success: true, message: 'Authenticated' });
});

app.get('/admin-logout', (req: Request, res: Response): void => {
  req.session.destroy(() => {
    res.redirect('/admin-login.html');
  });
});

// ─── Swagger API Docs — protected ─────────────────────────────────────────────
setupSwagger(app, requireAdminSession);

// ─── Health Check ─────────────────────────────────────────────────────────────
app.get('/health', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'Do It Cha API is running',
    timestamp: new Date().toISOString(),
  });
});

// ─── API Routes ───────────────────────────────────────────────────────────────
app.use('/api', routes);

// ─── Error Handling ───────────────────────────────────────────────────────────
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
