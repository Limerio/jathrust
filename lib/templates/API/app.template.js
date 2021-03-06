"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appTemplateJsAPI = exports.appTemplateTsAPI = void 0;
const appTemplateTsAPI = `
require("dotenv").config();
import express from "express";
import morgan from "morgan";

const app = express();
const port: string | number = process.env.PORT || 3000;

app.use(morgan("dev"));

app.use(
  process.env.API_ENDPOINT + "/v" + process.env.API_VERSION,
  require("./routes/api")
);

app.listen(port, () => console.log("API connected to " + port));
`;
exports.appTemplateTsAPI = appTemplateTsAPI;
const appTemplateJsAPI = `
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));

app.use(process.env.API_ENDPOINT + "/v" + process.env.API_VERSION, require("./routes/api"));

app.listen(port, () => console.log("API connected to " + port))`;
exports.appTemplateJsAPI = appTemplateJsAPI;
