"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateAppJsBasic = exports.templateAppTsBasic = void 0;
const templateAppTsBasic = `
require("dotenv").config();
import express from "express";
import morgan from "morgan";

const app = express();
const port: string | number = process.env.PORT || 3000;

app.use(morgan("dev"));

app.get("/", (req: any, res: any) => {
  res.sendStatus(200);
});

app.listen(port, () => console.log("Connected to " + port));
`;
exports.templateAppTsBasic = templateAppTsBasic;
const templateAppJsBasic = `
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.sendStatus(200);
})

app.listen(port, () => console.log("Connected to " + port))
`;
exports.templateAppJsBasic = templateAppJsBasic;
