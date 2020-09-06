"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDir = exports.isDir = exports.readFile = exports.writeFile = exports.createDir = void 0;
const fs_1 = __importDefault(require("fs"));
function createDir(dir) {
    try {
        return fs_1.default.mkdirSync(dir);
    }
    catch (e) {
        return console.error(e);
    }
}
exports.createDir = createDir;
function writeFile(file, data) {
    try {
        return fs_1.default.writeFileSync(file, data);
    }
    catch (e) {
        return e;
    }
}
exports.writeFile = writeFile;
function readFile(file) {
    try {
        return fs_1.default.readFileSync(file, "utf-8");
    }
    catch (e) {
        return e;
    }
}
exports.readFile = readFile;
function isDir(dir) {
    try {
        return fs_1.default.statSync(dir).isDirectory();
    }
    catch (e) {
        return e;
    }
}
exports.isDir = isDir;
function removeDir(dir) {
    try {
        return fs_1.default.rmdir(dir, {
            recursive: true,
        }, () => { });
    }
    catch (e) {
        return e;
    }
}
exports.removeDir = removeDir;
