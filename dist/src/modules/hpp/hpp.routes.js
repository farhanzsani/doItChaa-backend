"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const hpp_controller_1 = require("./hpp.controller");
const auth_middleware_1 = require("../../common/middleware/auth.middleware");
const router = (0, express_1.Router)();
// All routes require authentication
router.use(auth_middleware_1.authenticate);
router.post('/calculate', hpp_controller_1.hppController.calculateHpp.bind(hpp_controller_1.hppController));
router.post('/save', hpp_controller_1.hppController.saveHppCalculation.bind(hpp_controller_1.hppController));
router.get('/history', hpp_controller_1.hppController.getHppCalculations.bind(hpp_controller_1.hppController));
router.get('/history/:id', hpp_controller_1.hppController.getHppCalculationById.bind(hpp_controller_1.hppController));
router.delete('/history/:id', hpp_controller_1.hppController.deleteHppCalculation.bind(hpp_controller_1.hppController));
exports.default = router;
//# sourceMappingURL=hpp.routes.js.map