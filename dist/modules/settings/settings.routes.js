"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const settings_controller_1 = require("./settings.controller");
const auth_middleware_1 = require("../../common/middleware/auth.middleware");
const router = (0, express_1.Router)();
// All routes require authentication
router.use(auth_middleware_1.authenticate);
router.get('/', settings_controller_1.settingsController.getSettings.bind(settings_controller_1.settingsController));
router.put('/', settings_controller_1.settingsController.updateSettings.bind(settings_controller_1.settingsController));
exports.default = router;
//# sourceMappingURL=settings.routes.js.map