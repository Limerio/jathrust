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
exports.generateJavascriptTemplatePug = exports.generateJavascriptTemplateEjs = exports.generateJavascriptTemplateAPI = exports.generateJavascriptTemplateBasic = void 0;
const fs_1 = require("../init/fs");
const path_1 = __importDefault(require("path"));
const templates_1 = require("../templates/templates");
const initNpm_1 = require("../init/initNpm");
function generateJavascriptTemplateBasic(dir) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield initNpm_1.createEnvFile(path_1.default.join(dir), templates_1.envTemplateBasic);
            fs_1.createDir(path_1.default.join(dir, "src"));
            yield fs_1.writeFile(path_1.default.join(dir, "src", "index.js"), templates_1.templateAppJsBasic);
        }
        catch (e) {
            return console.error(e);
        }
    });
}
exports.generateJavascriptTemplateBasic = generateJavascriptTemplateBasic;
function generateJavascriptTemplateAPI(dir) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield initNpm_1.createEnvFile(path_1.default.join(dir), templates_1.envTemplateAPI);
            fs_1.createDir(path_1.default.join(dir, "src"));
            fs_1.createDir(path_1.default.join(dir, "src", "routes"));
            yield fs_1.writeFile(path_1.default.join(dir, "src", "index.js"), templates_1.appTemplateJsAPI);
            yield fs_1.writeFile(path_1.default.join(dir, "src", "routes", "api.js"), templates_1.apiTemplateJsAPI);
        }
        catch (e) {
            return console.error(e);
        }
    });
}
exports.generateJavascriptTemplateAPI = generateJavascriptTemplateAPI;
function generateJavascriptTemplateEjs(dir) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield initNpm_1.createEnvFile(path_1.default.join(dir), templates_1.envTemplateBasic);
            fs_1.createDir(path_1.default.join(dir, "src"));
            fs_1.createDir(path_1.default.join(dir, "src", "views"));
            fs_1.createDir(path_1.default.join(dir, "src", "views", "includes"));
            fs_1.createDir(path_1.default.join(dir, "src", "public"));
            fs_1.createDir(path_1.default.join(dir, "src", "public", "js"));
            fs_1.createDir(path_1.default.join(dir, "src", "public", "css"));
            fs_1.createDir(path_1.default.join(dir, "src", "public", "img"));
            yield fs_1.writeFile(path_1.default.join(dir, "src", "index.js"), templates_1.templateAppJsEjs);
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
exports.generateJavascriptTemplateEjs = generateJavascriptTemplateEjs;
function generateJavascriptTemplatePug(dir) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield initNpm_1.createEnvFile(path_1.default.join(dir), templates_1.envTemplateBasic);
            fs_1.createDir(path_1.default.join(dir, "src"));
            fs_1.createDir(path_1.default.join(dir, "src", "views"));
            fs_1.createDir(path_1.default.join(dir, "src", "views", "includes"));
            fs_1.createDir(path_1.default.join(dir, "src", "public"));
            fs_1.createDir(path_1.default.join(dir, "src", "public", "js"));
            fs_1.createDir(path_1.default.join(dir, "src", "public", "css"));
            fs_1.createDir(path_1.default.join(dir, "src", "public", "img"));
            yield fs_1.writeFile(path_1.default.join(dir, "src", "index.js"), templates_1.templateAppJsPug);
            yield fs_1.writeFile(path_1.default.join(dir, "src", "views", "index.pug"), templates_1.templateIndexPug);
            yield fs_1.writeFile(path_1.default.join(dir, "src", "views", "includes", "header.pug"), templates_1.HeaderTemplatePug);
            yield fs_1.writeFile(path_1.default.join(dir, "src", "views", "includes", "footer.pug"), templates_1.FooterTemplatePug);
            yield fs_1.writeFile(path_1.default.join(dir, "src", "public", "js", "script.js"), "");
            yield fs_1.writeFile(path_1.default.join(dir, "src", "public", "css", "styles.css"), templates_1.templateStyleCss);
        }
        catch (e) {
            return console.error(e);
        }
    });
}
exports.generateJavascriptTemplatePug = generateJavascriptTemplatePug;
