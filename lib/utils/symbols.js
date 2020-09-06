"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const isSupported = process.platform !== "win32" ||
    process.env.CI ||
    process.env.TERM === "xterm-256color";
exports.default = isSupported
    ? {
        info: chalk_1.default.blue("ℹ"),
        success: chalk_1.default.green("✔"),
        warning: chalk_1.default.yellow("⚠"),
        error: chalk_1.default.red("✖"),
    }
    : {
        info: chalk_1.default.blue("i"),
        success: chalk_1.default.green("√"),
        warning: chalk_1.default.yellow("‼"),
        error: chalk_1.default.red("×"),
    };
