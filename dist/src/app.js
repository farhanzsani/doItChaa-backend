"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const express_session_1 = __importDefault(require("express-session"));
const error_middleware_1 = require("./common/middleware/error.middleware");
const adminAuth_middleware_1 = require("./common/middleware/adminAuth.middleware");
const routes_1 = __importDefault(require("./routes"));
const swagger_1 = require("./config/swagger");
const env_1 = require("./config/env");
const app = (0, express_1.default)();
// ─── Security Middleware ──────────────────────────────────────────────────────
app.use((0, helmet_1.default)({
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
}));
app.use((0, cors_1.default)({
    origin: process.env['CORS_ORIGIN'] ?? '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
// ─── Session ──────────────────────────────────────────────────────────────────
app.use((0, express_session_1.default)({
    secret: env_1.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: env_1.env.isProduction,
        maxAge: 8 * 60 * 60 * 1000, // 8 hours
    },
}));
// ─── Body Parsing ─────────────────────────────────────────────────────────────
app.use(express_1.default.json({ limit: '10mb' }));
app.use(express_1.default.urlencoded({ extended: true }));
// ─── Static Files (Landing Page & Admin Login) ──────────────────────────────
app.use(express_1.default.static(path_1.default.join(__dirname, '..', 'public')));
// ─── Admin Auth Routes ───────────────────────────────────────────────────────
app.post('/admin-login', (req, res) => {
    const { password } = req.body;
    if (!password || password !== env_1.env.ADMIN_PASSWORD) {
        res.status(401).json({ success: false, message: 'Incorrect password' });
        return;
    }
    req.session.isAdmin = true;
    res.status(200).json({ success: true, message: 'Authenticated' });
});
app.get('/admin-logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/admin-login.html');
    });
});
// ─── Swagger API Docs — protected ─────────────────────────────────────────────
(0, swagger_1.setupSwagger)(app, adminAuth_middleware_1.requireAdminSession);
// ─── Health Check ─────────────────────────────────────────────────────────────
app.get('/health', (_req, res) => {
    res.status(200).json({
        success: true,
        message: 'Do It Cha API is running',
        timestamp: new Date().toISOString(),
    });
});
// ─── API Routes ───────────────────────────────────────────────────────────────
app.use('/api', routes_1.default);
// ─── Error Handling ───────────────────────────────────────────────────────────
app.use(error_middleware_1.notFoundHandler);
app.use(error_middleware_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map