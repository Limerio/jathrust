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
const handler_1 = __importDefault(require("./utils/handler"));
const questions_1 = require("./utils/questions");
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const args = process.argv.slice(2);
        if (args.length === 2) {
            const [option, data] = args;
            yield handler_1.default(option, data);
        }
        else {
            const { option, data } = yield prompts_1.default(questions_1.questions);
            yield handler_1.default(option, data);
        }
    }
    catch (err) {
        console.error(err);
    }
}))();
