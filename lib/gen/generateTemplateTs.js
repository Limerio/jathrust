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
exports.generateTypescriptTemplatePug = exports.generateTypescriptTemplateEjs = exports.generateTypescriptTemplateAPI = exports.generateTypescriptTemplateBasic = void 0;
const fs_1 = require("../init/fs");
const path_1 = __importDefault(require("path"));
const templates_1 = require("../templates/templates");
const initNpm_1 = require("../init/initNpm");
function generateTypescriptTemplateBasic(dir) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield initNpm_1.createEnvFile(path_1.default.join(dir), templates_1.envTemplateBasic);
            yield initNpm_1.createTsConfigFile(path_1.default.join(dir), templates_1.tsconfigTemplate);
            fs_1.createDir(path_1.default.join(dir, "src"));
            fs_1.createDir(path_1.default.join(dir, "build"));
            yield fs_1.writeFile(path_1.default.join(dir, "src", "index.ts"), templates_1.templateAppTsBasic);
        }
        catch (e) {
            return console.error(e);
        }
    });
}
exports.generateTypescriptTemplateBasic = generateTypescriptTemplateBasic;
function generateTypescriptTemplateAPI(dir) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield initNpm_1.createEnvFile(path_1.default.join(dir), templates_1.envTemplateAPI);
            yield initNpm_1.createTsConfigFile(path_1.default.join(dir), templates_1.tsconfigTemplate);
            fs_1.createDir(path_1.default.join(dir, "src"));
            fs_1.createDir(path_1.default.join(dir, "src", "routes"));
            fs_1.createDir(path_1.default.join(dir, "build"));
            yield fs_1.writeFile(path_1.default.join(dir, "src", "index.ts"), templates_1.appTemplateTsAPI);
            yield fs_1.writeFile(path_1.default.join(dir, "src", "routes", "api.ts"), templates_1.apiTemplateTsAPI);
        }
        catch (e) {
            return console.error(e);
        }
    });
}
exports.generateTypescriptTemplateAPI = generateTypescriptTemplateAPI;
function generateTypescriptTemplateEjs(dir) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield initNpm_1.createEnvFile(path_1.default.join(dir), templates_1.envTemplateBasic);
            yield initNpm_1.createTsConfigFile(path_1.default.join(dir), templates_1.tsconfigTemplate);
            fs_1.createDir(path_1.default.join(dir, "src"));
            fs_1.createDir(path_1.default.join(dir, "src", "views"));
            fs_1.createDir(path_1.default.join(dir, "src", "views", "includes"));
            fs_1.createDir(path_1.default.join(dir, "src", "public"));
            fs_1.createDir(path_1.default.join(dir, "src", "public", "js"));
            fs_1.createDir(path_1.default.join(dir, "src", "public", "css"));
            fs_1.createDir(path_1.default.join(dir, "src", "public", "img"));
            fs_1.createDir(path_1.default.join(dir, "build"));
            yield fs_1.writeFile(path_1.default.join(dir, "src", "index.ts"), templates_1.templateAppTsEjs);
            yield fs_1.writeFile(path_1.default.join(dir, "src", "views", "index.ejs"), templates_1.templateIndexEjs);
            yield fs_1.writeFile(path_1.default.join(dir, "src", "views", "includes", "header.ejs"), templates_1.HeaderTemplateEjs);
            yield fs_1.writeFile(path_1.default.join(dir, "src", "views", "includes", "footer.ejs"), templates_1.FooterTemplateEjs);
            yield fs_1.writeFile(path_1.default.join(dir, "src", "public", "js", "script.js"), "");
            yield fs_1.writeFile(path_1.default.join(dir, "src", "public", "css", "styles.css"), templates_1.templateStyleCss);
        }
        catch (e) {
            return console.error(e);
        }
    });
}
exports.generateTypescriptTemplateEjs = generateTypescriptTemplateEjs;
// à faire
function generateTypescriptTemplatePug(dir) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield initNpm_1.createEnvFile(path_1.default.join(dir), templates_1.envTemplateBasic);
            yield initNpm_1.createTsConfigFile(path_1.default.join(dir), templates_1.tsconfigTemplate);
            fs_1.createDir(path_1.default.join(dir, "src"));
            fs_1.createDir(path_1.default.join(dir, "src", "views"));
            fs_1.createDir(path_1.default.join(dir, "src", "views", "includes"));
            fs_1.createDir(path_1.default.join(dir, "src", "public"));
            fs_1.createDir(path_1.default.join(dir, "src", "public", "js"));
            fs_1.createDir(path_1.default.join(dir, "src", "public", "css"));
            fs_1.createDir(path_1.default.join(dir, "src", "public", "img"));
            fs_1.createDir(path_1.default.join(dir, "build"));
            yield fs_1.writeFile(path_1.default.join(dir, "src", "index.ts"), templates_1.templateAppTsPug);
            yield fs_1.writeFile(path_1.default.join(dir, "src", "views", "index.ejs"), templates_1.templateIndexEjs);
            yield fs_1.writeFile(path_1.default.join(dir, "src", "views", "includes", "header.pug"), templates_1.HeaderTemplatePug);
            yield fs_1.writeFile(path_1.default.join(dir, "src", "views", "includes", "footer.ejs"), templates_1.FooterTemplatePug);
            yield fs_1.writeFile(path_1.default.join(dir, "src", "public", "js", "script.js"), "");
            yield fs_1.writeFile(path_1.default.join(dir, "src", "public", "css", "styles.css"), templates_1.templateStyleCss);
        }
        catch (e) {
            return console.error(e);
        }
    });
}
exports.generateTypescriptTemplatePug = generateTypescriptTemplatePug;
