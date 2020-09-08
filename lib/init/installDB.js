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
const chalk_1 = __importDefault(require("chalk"));
const prompts_1 = __importDefault(require("prompts"));
const questions_1 = require("../utils/questions");
const child_process_1 = require("child_process");
const path_1 = __importDefault(require("path"));
const symbols_1 = __importDefault(require("../utils/symbols"));
const constants_1 = require("../utils/constants");
function installDB(projectDir) {
    return __awaiter(this, void 0, void 0, function* () {
        const dir = path_1.default.join(projectDir);
        const { confirmIncludeDB, includeDBName } = yield prompts_1.default(questions_1.questionsDatabase);
        if (confirmIncludeDB) {
            yield child_process_1.execSync(`npm i ${includeDBName}`, {
                cwd: dir,
            });
            console.log(`${chalk_1.default.green(symbols_1.default.success)} ${constants_1.choicesDB.find((db) => db.value === includeDBName).title} installed with success`);
        }
    });
}
exports.default = installDB;
