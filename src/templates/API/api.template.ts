const apiTemplateTsAPI: string = `
import express from "express";
const router = express.Router();

router.get("/", (req: any, res: any) => {
  res.sendStatus(200);
});

module.exports = router;
`;

const apiTemplateJsAPI: string = `
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
`;

export { apiTemplateTsAPI, apiTemplateJsAPI };
