"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAdminSession = requireAdminSession;
function requireAdminSession(req, res, next) {
    if (req.session?.isAdmin === true) {
        next();
        return;
    }
    res.redirect('/admin-login.html');
}
//# sourceMappingURL=adminAuth.middleware.js.map