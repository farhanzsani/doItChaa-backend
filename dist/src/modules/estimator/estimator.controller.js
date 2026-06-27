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
exports.calculate = calculate;
exports.saveEstimate = saveEstimate;
exports.convertToTask = convertToTask;
exports.getHistory = getHistory;
exports.getEstimateById = getEstimateById;
const response_1 = require("../../common/utils/response");
const estimatorService = __importStar(require("./estimator.service"));
async function calculate(req, res) {
    const input = req.body;
    const result = estimatorService.calculateEstimate(input);
    (0, response_1.sendSuccess)(res, 'Estimate calculated successfully', result);
}
async function saveEstimate(req, res) {
    const userId = req.user.id;
    const input = req.body;
    const estimate = await estimatorService.saveEstimate(userId, input);
    (0, response_1.sendSuccess)(res, 'Estimate saved successfully', estimate, 201);
}
async function convertToTask(req, res) {
    const userId = req.user.id;
    const input = req.body;
    const result = await estimatorService.convertEstimateToTask(userId, input);
    (0, response_1.sendSuccess)(res, 'Estimate converted to task successfully', result, 201);
}
async function getHistory(req, res) {
    const userId = req.user.id;
    const { page, limit } = req.query;
    const result = await estimatorService.getEstimateHistory(userId, page, limit);
    (0, response_1.sendSuccess)(res, 'Estimate history retrieved successfully', result);
}
async function getEstimateById(req, res) {
    const userId = req.user.id;
    const id = req.params['id'];
    const estimate = await estimatorService.getEstimateById(userId, id);
    (0, response_1.sendSuccess)(res, 'Estimate retrieved successfully', estimate);
}
//# sourceMappingURL=estimator.controller.js.map