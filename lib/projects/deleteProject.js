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
const path_1 = __importDefault(require("path"));
const symbols_1 = __importDefault(require("../utils/symbols"));
const fs_1 = require("../init/fs");
function deleteProject(confirm, nameProject) {
    return __awaiter(this, void 0, void 0, function* () {
        const dirProject = path_1.default.join(nameProject);
        if (confirm) {
            if (fs_1.isDir(dirProject)) {
                if (JSON.parse(fs_1.readFile(`${dirProject}/jathrust.json`)).projectDir ===
                    nameProject) {
                    yield fs_1.removeDir(dirProject);
                    console.log(`${symbols_1.default.success} Project deleted`);
                }
                else {
                    console.log(`${symbols_1.default.error} This project is not a jathrust project`);
                }
            }
            else if (!dirProject) {
                console.log(`${symbols_1.default.warning} Unknown project`);
            }
        }
    });
}
exports.default = deleteProject;
