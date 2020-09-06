"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiTemplateJsAPI = exports.apiTemplateTsAPI = void 0;
const apiTemplateTsAPI = `
import express from "express";
const router = express.Router();

router.get("/", (req: any, res: any) => {
  res.sendStatus(200);
});

module.exports = router;
`;
exports.apiTemplateTsAPI = apiTemplateTsAPI;
const apiTemplateJsAPI = `
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
`;
exports.apiTemplateJsAPI = apiTemplateJsAPI;
