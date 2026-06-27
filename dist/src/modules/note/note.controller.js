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
exports.getNotes = getNotes;
exports.getNoteById = getNoteById;
exports.createNote = createNote;
exports.updateNote = updateNote;
exports.deleteNote = deleteNote;
exports.getTaskNotes = getTaskNotes;
const response_1 = require("../../common/utils/response");
const noteService = __importStar(require("./note.service"));
async function getNotes(req, res) {
    const userId = req.user.id;
    const query = req.query;
    const result = await noteService.getNotes(userId, query);
    (0, response_1.sendSuccess)(res, 'Notes retrieved successfully', result);
}
async function getNoteById(req, res) {
    const userId = req.user.id;
    const id = req.params['id'];
    const note = await noteService.getNoteById(userId, id);
    (0, response_1.sendSuccess)(res, 'Note retrieved successfully', note);
}
async function createNote(req, res) {
    const userId = req.user.id;
    const input = req.body;
    const note = await noteService.createNote(userId, input);
    (0, response_1.sendSuccess)(res, 'Note created successfully', note, 201);
}
async function updateNote(req, res) {
    const userId = req.user.id;
    const id = req.params['id'];
    const input = req.body;
    const note = await noteService.updateNote(userId, id, input);
    (0, response_1.sendSuccess)(res, 'Note updated successfully', note);
}
async function deleteNote(req, res) {
    const userId = req.user.id;
    const id = req.params['id'];
    await noteService.deleteNote(userId, id);
    (0, response_1.sendSuccess)(res, 'Note deleted successfully', null);
}
async function getTaskNotes(req, res) {
    const userId = req.user.id;
    const taskId = req.params['taskId'];
    const notes = await noteService.getTaskNotes(userId, taskId);
    (0, response_1.sendSuccess)(res, 'Task notes retrieved successfully', notes);
}
//# sourceMappingURL=note.controller.js.map