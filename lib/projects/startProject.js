"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("../init/fs");
const path_1 = __importDefault(require("path"));
const initNpm_1 = require("../init/initNpm");
function startProject(confirm, nameProject, event) {
    return __awaiter(this, void 0, void 0, function* () {
        if (confirm) {
            const projectDir = path_1.default.join(nameProject);
            if (fs_1.isDir(projectDir)) {
                yield initNpm_1.startCmdProject(projectDir, event);
            }
        }
    });
}
exports.default = startProject;
