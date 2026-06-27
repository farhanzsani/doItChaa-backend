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
exports.getTasks = getTasks;
exports.getTaskById = getTaskById;
exports.createTask = createTask;
exports.updateTask = updateTask;
exports.deleteTask = deleteTask;
exports.markTaskCompleted = markTaskCompleted;
const response_1 = require("../../common/utils/response");
const taskService = __importStar(require("./task.service"));
async function getTasks(req, res) {
    const userId = req.user.id;
    const query = req.query;
    const result = await taskService.getTasks(userId, query);
    (0, response_1.sendSuccess)(res, 'Tasks retrieved successfully', result);
}
async function getTaskById(req, res) {
    const userId = req.user.id;
    const id = req.params['id'];
    const task = await taskService.getTaskById(userId, id);
    (0, response_1.sendSuccess)(res, 'Task retrieved successfully', task);
}
async function createTask(req, res) {
    const userId = req.user.id;
    const input = req.body;
    const task = await taskService.createTask(userId, input);
    (0, response_1.sendSuccess)(res, 'Task created successfully', task, 201);
}
async function updateTask(req, res) {
    const userId = req.user.id;
    const id = req.params['id'];
    const input = req.body;
    const task = await taskService.updateTask(userId, id, input);
    (0, response_1.sendSuccess)(res, 'Task updated successfully', task);
}
async function deleteTask(req, res) {
    const userId = req.user.id;
    const id = req.params['id'];
    await taskService.deleteTask(userId, id);
    (0, response_1.sendSuccess)(res, 'Task deleted successfully', null);
}
async function markTaskCompleted(req, res) {
    const userId = req.user.id;
    const id = req.params['id'];
    const task = await taskService.markTaskCompleted(userId, id);
    (0, response_1.sendSuccess)(res, 'Task marked as completed', task);
}
//# sourceMappingURL=task.controller.js.map