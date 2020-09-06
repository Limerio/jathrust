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
exports.createJathrustFile = exports.createGitIgnoreFile = exports.startCmdProject = exports.createTsConfigFile = exports.createEnvFile = exports.createTemplate = exports.initNpm = void 0;
const child_process_1 = require("child_process");
const fs_1 = require("./fs");
const constants_1 = require("../utils/constants");
const generateTemplateJs_1 = require("../gen/generateTemplateJs");
const generateTemplateTs_1 = require("../gen/generateTemplateTs");
const path_1 = __importDefault(require("path"));
function initNpm(dir, lang, nameProject) {
    return __awaiter(this, void 0, void 0, function* () {
        yield child_process_1.execSync("npm init -y", {
            cwd: dir,
        });
        const content = JSON.parse(fs_1.readFile(`${dir}/package.json`));
        content.name = nameProject;
        content.scripts.dev =
            lang === constants_1.language.javascript
                ? "nodemon ./src/index.js"
                : "nodemon --exec ts-node src/index.ts";
        content.scripts.start =
            lang === constants_1.language.javascript
                ? "node ./src/index.js"
                : "node ./build/index.js";
        content.main = lang === constants_1.language.javascript ? "src/index.js" : "src/index.ts";
        if (lang === constants_1.language.typescript)
            content.scripts.build = "tsc --build";
        // if (githubURL.startsWith("http://github.com/")) {
        //   content.repository.type = "git";
        //   content.repository.url = `git+${githubURL}`;
        //   content.bug.url = githubURL.replace(".git", "/issues");
        //   content.homepage = githubURL.replace(".git", "#readme");
        // }
        fs_1.writeFile(path_1.default.join(dir, "package.json"), JSON.stringify(content, null, 2));
        createGitIgnoreFile(path_1.default.join(dir), `node_modules/
package-lock.json
.env`);
        yield installModule(dir, lang);
    });
}
exports.initNpm = initNpm;
function installModule(dir, lang) {
    if (lang === constants_1.language.typescript) {
        child_process_1.execSync("npm i -D typescript ts-node @types/node nodemon morgan @types/morgan dotenv", {
            cwd: dir,
        });
        child_process_1.execSync("npm i express @types/express", {
            cwd: dir,
        });
    }
    else if (lang === constants_1.language.javascript) {
        child_process_1.execSync("npm i -D nodemon morgan", {
            cwd: dir,
        });
        child_process_1.execSync("npm i express dotenv", {
            cwd: dir,
        });
    }
}
function createTemplate(dir, projectType, lang, template) {
    if (lang === constants_1.language.javascript) {
        if (projectType === constants_1.typeProject.basicExpress && template === "none") {
            generateTemplateJs_1.generateJavascriptTemplateBasic(dir);
        }
        else if (projectType === constants_1.typeProject.basicExpress &&
            template === constants_1.templateContentNodejs.ejs) {
            child_process_1.execSync("npm i ejs path", {
                cwd: dir,
            });
            generateTemplateJs_1.generateJavascriptTemplateEjs(dir);
        }
        else if (projectType === constants_1.typeProject.basicExpress &&
            template === constants_1.templateContentNodejs.pug) {
            child_process_1.execSync("npm i pug path", {
                cwd: dir,
            });
            generateTemplateJs_1.generateJavascriptTemplatePug(dir);
        }
        else if (projectType === constants_1.typeProject.apiExpress) {
            generateTemplateJs_1.generateJavascriptTemplateAPI(dir);
        }
    }
    else if (lang === constants_1.language.typescript) {
        if (projectType === constants_1.typeProject.apiExpress) {
            generateTemplateTs_1.generateTypescriptTemplateAPI(dir);
        }
        else if (projectType === constants_1.typeProject.basicExpress &&
            template === "none") {
            generateTemplateJs_1.generateJavascriptTemplateBasic(dir);
        }
        else if (projectType === constants_1.typeProject.basicExpress &&
            template === constants_1.templateContentNodejs.ejs) {
            child_process_1.execSync("npm i ejs path", {
                cwd: dir,
            });
            generateTemplateTs_1.generateTypescriptTemplateEjs(dir);
        }
        else if (projectType === constants_1.typeProject.basicExpress &&
            template === constants_1.templateContentNodejs.pug) {
            child_process_1.execSync("npm i pug path", {
                cwd: dir,
            });
            generateTemplateTs_1.generateTypescriptTemplatePug(dir);
        }
    }
}
exports.createTemplate = createTemplate;
function createEnvFile(dir, data) {
    try {
        return fs_1.writeFile(`${dir}/.env`, data);
    }
    catch (e) {
        return e;
    }
}
exports.createEnvFile = createEnvFile;
function createTsConfigFile(dir, data) {
    try {
        return fs_1.writeFile(`${dir}/tsconfig.json`, data);
    }
    catch (e) {
        return e;
    }
}
exports.createTsConfigFile = createTsConfigFile;
function createGitIgnoreFile(dir, data) {
    try {
        return fs_1.writeFile(`${dir}/.gitignore`, data);
    }
    catch (e) {
        return e;
    }
}
exports.createGitIgnoreFile = createGitIgnoreFile;
function createJathrustFile(dir, data) {
    try {
        return fs_1.writeFile(`${dir}/jathrust.json`, data);
    }
    catch (e) {
        return e;
    }
}
exports.createJathrustFile = createJathrustFile;
function startCmdProject(dir, event) {
    const value = child_process_1.execSync(`npm run ${event}`, {
        cwd: dir,
    });
    return console.log(value);
}
exports.startCmdProject = startCmdProject;
