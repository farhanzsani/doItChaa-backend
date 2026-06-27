"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategories = getCategories;
exports.createCategory = createCategory;
exports.updateCategory = updateCategory;
exports.deleteCategory = deleteCategory;
const response_1 = require("../../common/utils/response");
const categoryService = __importStar(require("./category.service"));
async function getCategories(req, res) {
    const userId = req.user.id;
    const categories = await categoryService.getCategories(userId);
    (0, response_1.sendSuccess)(res, 'Categories retrieved successfully', categories);
}
async function createCategory(req, res) {
    const userId = req.user.id;
    const input = req.body;
    const category = await categoryService.createCategory(userId, input);
    (0, response_1.sendSuccess)(res, 'Category created successfully', category, 201);
}
async function updateCategory(req, res) {
    const userId = req.user.id;
    const id = req.params['id'];
    const input = req.body;
    const category = await categoryService.updateCategory(userId, id, input);
    (0, response_1.sendSuccess)(res, 'Category updated successfully', category);
}
async function deleteCategory(req, res) {
    const userId = req.user.id;
    const id = req.params['id'];
    await categoryService.deleteCategory(userId, id);
    (0, response_1.sendSuccess)(res, 'Category deleted successfully', null);
}
//# sourceMappingURL=category.controller.js.map