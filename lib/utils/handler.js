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
const prompts_1 = __importDefault(require("prompts"));
const constants_1 = require("./constants");
const questions_1 = require("./questions");
const createProject_1 = __importDefault(require("../projects/createProject"));
const deleteProject_1 = __importDefault(require("../projects/deleteProject"));
function handler(option, nameProject) {
    return __awaiter(this, void 0, void 0, function* () {
        if (option === constants_1.newType.new) {
            const { typeOfProject, lang, template } = yield prompts_1.default(questions_1.projectType);
            if (typeOfProject === constants_1.typeProject.basicExpress) {
                yield createProject_1.default(nameProject, constants_1.typeProject.basicExpress, lang, template);
            }
            else if (typeOfProject === constants_1.typeProject.apiExpress) {
                yield createProject_1.default(nameProject, constants_1.typeProject.apiExpress, lang, template);
            }
        }
        else if (option === constants_1.newType.delete) {
            const { confirm } = yield prompts_1.default(questions_1.confirmDelete);
            yield deleteProject_1.default(confirm, nameProject);
        }
    });
}
exports.default = handler;
