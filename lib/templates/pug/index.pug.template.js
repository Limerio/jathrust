"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateIndexPug = void 0;
exports.templateIndexPug = `doctype html
html
    head
    title= title
    style
      include public/css/styles.css
    body
        p Hello World
    script
      include public/js/script.js
`;
