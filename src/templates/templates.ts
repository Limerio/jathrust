/* ******************** BASIC ******************** */

export { templateAppJsBasic, templateAppTsBasic } from "./basic/app.template";
export { envTemplateBasic } from "./basic/.env.template";

/* ******************** API ******************** */

export { apiTemplateJsAPI, apiTemplateTsAPI } from "./API/api.template";
export { appTemplateJsAPI, appTemplateTsAPI } from "./API/app.template";
export { envTemplateAPI } from "./api/.env.template";

/* ******************** EJS ******************** */

export { templateAppTsEjs, templateAppJsEjs } from "./ejs/app.template";
export { templateIndexEjs } from "./ejs/index.ejs.template";
export {
  HeaderTemplateEjs,
  FooterTemplateEjs,
} from "./ejs/headerFooter.ejs.template";

/* ******************** PUG ******************** */

export { templateAppTsPug, templateAppJsPug } from "./pug/app.template";
export { templateIndexPug } from "./pug/index.pug.template";
export {
  HeaderTemplatePug,
  FooterTemplatePug,
} from "./pug/headerFooter.pug.template";

/* ******************** OTHERS ******************** */

export { tsconfigTemplate } from "./others/tsconfig.template";
export { templateStyleCss } from "./others/styles.css.template";
export { templateJathrustJson } from "./others/jathrust.json.template";
