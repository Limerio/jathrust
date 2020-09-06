"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterTemplateEjs = exports.HeaderTemplateEjs = void 0;
const HeaderTemplateEjs = `<html>
  <head>
    <link rel="stylesheet" href="/css/styles.css" />
    <title><%= title %></title>
  </head>
`;
exports.HeaderTemplateEjs = HeaderTemplateEjs;
const FooterTemplateEjs = `</html>`;
exports.FooterTemplateEjs = FooterTemplateEjs;
