"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const material_controller_1 = require("./material.controller");
const auth_middleware_1 = require("../../common/middleware/auth.middleware");
const router = (0, express_1.Router)();
// All routes require authentication
router.use(auth_middleware_1.authenticate);
router.post('/', material_controller_1.materialController.createMaterial.bind(material_controller_1.materialController));
router.get('/', material_controller_1.materialController.getMaterials.bind(material_controller_1.materialController));
router.get('/:id', material_controller_1.materialController.getMaterialById.bind(material_controller_1.materialController));
router.put('/:id', material_controller_1.materialController.updateMaterial.bind(material_controller_1.materialController));
router.delete('/:id', material_controller_1.materialController.deleteMaterial.bind(material_controller_1.materialController));
exports.default = router;
//# sourceMappingURL=material.routes.js.map