"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterTemplatePug = exports.HeaderTemplatePug = void 0;
const HeaderTemplatePug = `head
    style
      include /css/style.css`;
exports.HeaderTemplatePug = HeaderTemplatePug;
const FooterTemplatePug = ` script
      include /js/script.js`;
exports.FooterTemplatePug = FooterTemplatePug;
