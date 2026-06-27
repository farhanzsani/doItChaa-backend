"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_routes_1 = __importDefault(require("../modules/auth/auth.routes"));
const category_routes_1 = __importDefault(require("../modules/category/category.routes"));
const task_routes_1 = __importDefault(require("../modules/task/task.routes"));
const estimator_routes_1 = __importDefault(require("../modules/estimator/estimator.routes"));
const dashboard_routes_1 = __importDefault(require("../modules/dashboard/dashboard.routes"));
const note_routes_1 = __importDefault(require("../modules/note/note.routes"));
const material_routes_1 = __importDefault(require("../modules/material/material.routes"));
const settings_routes_1 = __importDefault(require("../modules/settings/settings.routes"));
const hpp_routes_1 = __importDefault(require("../modules/hpp/hpp.routes"));
const router = (0, express_1.Router)();
router.use('/auth', auth_routes_1.default);
router.use('/categories', category_routes_1.default);
router.use('/tasks', task_routes_1.default);
router.use('/estimator', estimator_routes_1.default);
router.use('/dashboard', dashboard_routes_1.default);
router.use('/notes', note_routes_1.default);
router.use('/materials', material_routes_1.default);
router.use('/settings', settings_routes_1.default);
router.use('/hpp', hpp_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map