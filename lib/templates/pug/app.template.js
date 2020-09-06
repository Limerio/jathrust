"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateAppJsPug = exports.templateAppTsPug = void 0;
const templateAppTsPug = `require("dotenv").config();
import express from "express";
import morgan from "morgan";
import path from "path";

const app = express();
const port: string | number = process.env.PORT || 3000;

app.use(morgan("dev"));
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req: any, res: any) => {
  res.render("index.pug", {
      title: "Title"
  });
});

app.listen(port, () => console.log("Connected to " + port));`;
exports.templateAppTsPug = templateAppTsPug;
const templateAppJsPug = `require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const path = require("path")

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.set("view engine", "pug");

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index.pug", {
      title: "Title"
  });
});

app.listen(port, () => console.log("Connected to " + port));`;
exports.templateAppJsPug = templateAppJsPug;
