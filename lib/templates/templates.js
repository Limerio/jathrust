"use strict";
/* ******************** BASIC ******************** */
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateJathrustJson = exports.templateStyleCss = exports.tsconfigTemplate = exports.FooterTemplatePug = exports.HeaderTemplatePug = exports.templateIndexPug = exports.templateAppJsPug = exports.templateAppTsPug = exports.FooterTemplateEjs = exports.HeaderTemplateEjs = exports.templateIndexEjs = exports.templateAppJsEjs = exports.templateAppTsEjs = exports.envTemplateAPI = exports.appTemplateTsAPI = exports.appTemplateJsAPI = exports.apiTemplateTsAPI = exports.apiTemplateJsAPI = exports.envTemplateBasic = exports.templateAppTsBasic = exports.templateAppJsBasic = void 0;
var app_template_1 = require("./basic/app.template");
Object.defineProperty(exports, "templateAppJsBasic", { enumerable: true, get: function () { return app_template_1.templateAppJsBasic; } });
Object.defineProperty(exports, "templateAppTsBasic", { enumerable: true, get: function () { return app_template_1.templateAppTsBasic; } });
var _env_template_1 = require("./basic/.env.template");
Object.defineProperty(exports, "envTemplateBasic", { enumerable: true, get: function () { return _env_template_1.envTemplateBasic; } });
/* ******************** API ******************** */
var api_template_1 = require("./API/api.template");
Object.defineProperty(exports, "apiTemplateJsAPI", { enumerable: true, get: function () { return api_template_1.apiTemplateJsAPI; } });
Object.defineProperty(exports, "apiTemplateTsAPI", { enumerable: true, get: function () { return api_template_1.apiTemplateTsAPI; } });
var app_template_2 = require("./API/app.template");
Object.defineProperty(exports, "appTemplateJsAPI", { enumerable: true, get: function () { return app_template_2.appTemplateJsAPI; } });
Object.defineProperty(exports, "appTemplateTsAPI", { enumerable: true, get: function () { return app_template_2.appTemplateTsAPI; } });
var _env_template_2 = require("./api/.env.template");
Object.defineProperty(exports, "envTemplateAPI", { enumerable: true, get: function () { return _env_template_2.envTemplateAPI; } });
/* ******************** EJS ******************** */
var app_template_3 = require("./ejs/app.template");
Object.defineProperty(exports, "templateAppTsEjs", { enumerable: true, get: function () { return app_template_3.templateAppTsEjs; } });
Object.defineProperty(exports, "templateAppJsEjs", { enumerable: true, get: function () { return app_template_3.templateAppJsEjs; } });
var index_ejs_template_1 = require("./ejs/index.ejs.template");
Object.defineProperty(exports, "templateIndexEjs", { enumerable: true, get: function () { return index_ejs_template_1.templateIndexEjs; } });
var headerFooter_ejs_template_1 = require("./ejs/headerFooter.ejs.template");
Object.defineProperty(exports, "HeaderTemplateEjs", { enumerable: true, get: function () { return headerFooter_ejs_template_1.HeaderTemplateEjs; } });
Object.defineProperty(exports, "FooterTemplateEjs", { enumerable: true, get: function () { return headerFooter_ejs_template_1.FooterTemplateEjs; } });
/* ******************** PUG ******************** */
var app_template_4 = require("./pug/app.template");
Object.defineProperty(exports, "templateAppTsPug", { enumerable: true, get: function () { return app_template_4.templateAppTsPug; } });
Object.defineProperty(exports, "templateAppJsPug", { enumerable: true, get: function () { return app_template_4.templateAppJsPug; } });
var index_pug_template_1 = require("./pug/index.pug.template");
Object.defineProperty(exports, "templateIndexPug", { enumerable: true, get: function () { return index_pug_template_1.templateIndexPug; } });
var headerFooter_pug_template_1 = require("./pug/headerFooter.pug.template");
Object.defineProperty(exports, "HeaderTemplatePug", { enumerable: true, get: function () { return headerFooter_pug_template_1.HeaderTemplatePug; } });
Object.defineProperty(exports, "FooterTemplatePug", { enumerable: true, get: function () { return headerFooter_pug_template_1.FooterTemplatePug; } });
/* ******************** OTHERS ******************** */
var tsconfig_template_1 = require("./others/tsconfig.template");
Object.defineProperty(exports, "tsconfigTemplate", { enumerable: true, get: function () { return tsconfig_template_1.tsconfigTemplate; } });
var styles_css_template_1 = require("./others/styles.css.template");
Object.defineProperty(exports, "templateStyleCss", { enumerable: true, get: function () { return styles_css_template_1.templateStyleCss; } });
var jathrust_json_template_1 = require("./others/jathrust.json.template");
Object.defineProperty(exports, "templateJathrustJson", { enumerable: true, get: function () { return jathrust_json_template_1.templateJathrustJson; } });
