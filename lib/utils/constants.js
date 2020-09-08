"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.choicesDB = exports.database = exports.symbols = exports.templateContentNodejs = exports.language = exports.typeProject = exports.newType = void 0;
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
var database;
(function (database) {
    database["mongoose"] = "mongoose";
    database["postgresql"] = "pg";
    database["redis"] = "redis";
    database["mssql"] = "mssql";
    database["mysql"] = "mysql";
    database["sqlite"] = "sqlite3";
    database["firebase_tools"] = "firebase-tools";
    database["mariadb"] = "mariadb";
})(database || (database = {}));
exports.database = database;
const choicesDB = [
    { title: "Firebase tools", value: database.firebase_tools },
    { title: "MariaDB", value: database.mariadb },
    { title: "MongoDB (mongoose)", value: database.mongoose },
    { title: "MsSQL", value: database.mssql },
    { title: "MySQL", value: database.mysql },
    { title: "PostGreSQL", value: database.postgresql },
    { title: "Redis", value: database.redis },
    { title: "SQLITE", value: database.sqlite },
];
exports.choicesDB = choicesDB;
