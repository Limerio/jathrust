import {
  typeProject,
  newType,
  language,
  templateContentNodejs,
} from "./constants";
import { PromptObject } from "prompts";

const questions: Array<PromptObject> = [
  {
    type: "select",
    name: "option",
    message: "Choose a option",
    choices: [
      { title: "New project", value: newType.new },
      { title: "Start project", value: newType.start },
      { title: "Delete project", value: newType.delete },
    ],
  },
  {
    type: (prev: string) =>
      prev === newType.new || prev === newType.delete || prev === newType.start
        ? "text"
        : null,
    name: "data",
    message: "Enter the name for your project",
    validate: (value: string) =>
      value.length === 0 ? `Project name cannot be empty!` : true,
  },
];

const projectType: Array<PromptObject> = [
  {
    type: "select",
    name: "typeOfProject",
    message: "Choose a type of project for this list",
    choices: [
      { title: "Basic express project", value: typeProject.basicExpress },
      { title: "API express project", value: typeProject.apiExpress },
    ],
  },
  {
    type: (prev: string) =>
      prev === typeProject.basicExpress ? "select" : null,
    name: "template",
    message: "What template node.js did you choose ?",
    choices: [
      { title: "EJS", value: templateContentNodejs.ejs },
      { title: "PUG", value: templateContentNodejs.pug },
      { title: "None", value: "none" },
    ],
    validate: (value: string) =>
      value.length === 0 ? `You don't have choice a template` : true,
  },
  {
    type: "select",
    name: "lang",
    message: "Choose a language of project for this list",
    choices: [
      { title: "Javascript", value: language.javascript },
      { title: "Typescript", value: language.typescript },
    ],
    validate: (value: string) =>
      value.length === 0 ? `You don't have choice a language` : true,
  },
];

const confirmDelete: Array<PromptObject> = [
  {
    type: "confirm",
    name: "confirm",
    message: "Are you sure to delete this project",
  },
];

const confirmStart: Array<PromptObject> = [
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
    validate: (value: string) =>
      value.length === 0 ? `You don't have choice an option` : true,
  },
];

const questionsGithub: Array<PromptObject> = [
  {
    type: "confirm",
    name: "githubConfirm",
    message: "Would you include a github link project ?",
  },
  {
    type: (prev: boolean) => (prev === true ? "text" : null),
    name: "githubURL",
    message: "Enter the link the project",
    validate: (value: string) =>
      (value.length === 0 ? "Cannot empty link project" : true) ||
      (value.startsWith("https://github.com/")
        ? true
        : "The git project must be started 'https://github.com/'"),
  },
];

export { questions, projectType, confirmDelete, confirmStart, questionsGithub };
