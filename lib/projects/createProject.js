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
const initNpm_1 = require("../init/initNpm");
const fs_1 = require("../init/fs");
const constants_1 = require("../utils/constants");
const templates_1 = require("../templates/templates");
const symbols_1 = __importDefault(require("../utils/symbols"));
// import prompts from "prompts";
// import { questionsGithub } from "../utils/questions";
const dir = process.cwd();
function createProject(nameProject, type, lang, template) {
    return __awaiter(this, void 0, void 0, function* () {
        const projectDir = path_1.default.join(dir, nameProject);
        try {
            yield fs_1.createDir(projectDir);
            // const { githubURL } = await prompts(questionsGithub);
            yield initNpm_1.initNpm(projectDir, lang, nameProject);
            console.log(`${symbols_1.default.success} Npm initialization completed`);
            yield initNpm_1.createTemplate(projectDir, type, lang, template);
            console.log(`${symbols_1.default.success} Template created`);
            yield initNpm_1.createJathrustFile(projectDir, templates_1.templateJathrustJson
                .replace("lang", `${lang === constants_1.language.typescript ? "Typescript" : "Javascript"}`)
                .replace("nameProject", nameProject)
                .replace("templateName", `${template === "none"
                ? ""
                : `,
  "template": "${template}"`}`));
            console.log(`${symbols_1.default.success} Jathrust config file completed`);
        }
        catch (e) { }
    });
}
exports.default = createProject;
