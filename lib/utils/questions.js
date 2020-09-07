"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionsGithub = exports.confirmStart = exports.confirmDelete = exports.projectType = exports.questions = void 0;
const constants_1 = require("./constants");
const questions = [
    {
        type: "select",
        name: "option",
        message: "Choose a option",
        choices: [
            { title: "New project", value: constants_1.newType.new },
            { title: "Delete project", value: constants_1.newType.delete },
        ],
    },
    {
        type: (prev) => prev === constants_1.newType.new || prev === constants_1.newType.delete || prev === constants_1.newType.start
            ? "text"
            : null,
        name: "data",
        message: "Enter the name for your project",
        validate: (value) => value.length === 0 ? `Project name cannot be empty!` : true,
    },
];
exports.questions = questions;
const projectType = [
    {
        type: "select",
        name: "typeOfProject",
        message: "Choose a type of project for this list",
        choices: [
            { title: "Basic express project", value: constants_1.typeProject.basicExpress },
            { title: "API express project", value: constants_1.typeProject.apiExpress },
        ],
    },
    {
        type: (prev) => prev === constants_1.typeProject.basicExpress ? "select" : null,
        name: "template",
        message: "What template node.js did you choose ?",
        choices: [
            { title: "EJS", value: constants_1.templateContentNodejs.ejs },
            { title: "PUG", value: constants_1.templateContentNodejs.pug },
            { title: "None", value: "none" },
        ],
        validate: (value) => value.length === 0 ? `You don't have choice a template` : true,
    },
    {
        type: "select",
        name: "lang",
        message: "Choose a language of project for this list",
        choices: [
            { title: "Javascript", value: constants_1.language.javascript },
            { title: "Typescript", value: constants_1.language.typescript },
        ],
        validate: (value) => value.length === 0 ? `You don't have choice a language` : true,
    },
];
exports.projectType = projectType;
const confirmDelete = [
    {
        type: "confirm",
        name: "confirm",
        message: "Are you sure to delete this project",
    },
];
exports.confirmDelete = confirmDelete;
const confirmStart = [
    {
        type: "confirm",
        name: "confirm",
        message: "Are you sure to start this project",
    },
    {
        type: "select",
        name: "event",
        message: "What option did you start",
        choices: [
            { title: "start", value: "start" },
            { title: "dev", value: "dev" },
            { title: "build", value: "build" },
        ],
        validate: (value) => value.length === 0 ? `You don't have choice an option` : true,
    },
];
exports.confirmStart = confirmStart;
const questionsGithub = [
    {
        type: "confirm",
        name: "githubConfirm",
        message: "Would you include a github link project ?",
    },
    {
        type: (prev) => (prev === true ? "text" : null),
        name: "githubURL",
        message: "Enter the link the project",
        validate: (value) => (value.length === 0 ? "Cannot empty link project" : true) ||
            (value.startsWith("https://github.com/")
                ? true
                : "The git project must be started 'https://github.com/'"),
    },
];
exports.questionsGithub = questionsGithub;
