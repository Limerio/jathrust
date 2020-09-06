"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.symbols = exports.templateContentNodejs = exports.language = exports.typeProject = exports.newType = void 0;
var newType;
(function (newType) {
    newType["new"] = "new";
    newType["delete"] = "delete";
    newType["start"] = "start";
})(newType || (newType = {}));
exports.newType = newType;
var typeProject;
(function (typeProject) {
    typeProject["basicExpress"] = "basic-express";
    typeProject["apiExpress"] = "api-express";
})(typeProject || (typeProject = {}));
exports.typeProject = typeProject;
var language;
(function (language) {
    language["typescript"] = "ts";
    language["javascript"] = "js";
})(language || (language = {}));
exports.language = language;
var templateContentNodejs;
(function (templateContentNodejs) {
    templateContentNodejs["ejs"] = "ejs";
    templateContentNodejs["pug"] = "pug";
})(templateContentNodejs || (templateContentNodejs = {}));
exports.templateContentNodejs = templateContentNodejs;
var symbols;
(function (symbols) {
    symbols["info"] = "\u2139";
    symbols["success"] = "\u2714";
    symbols["warning"] = "\u26A0";
    symbols["error"] = "\u2716";
})(symbols || (symbols = {}));
exports.symbols = symbols;
