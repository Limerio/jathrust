import { createDir, writeFile } from "../init/fs";
import path from "path";
import {
  templateAppJsBasic,
  envTemplateBasic,
  apiTemplateJsAPI,
  appTemplateJsAPI,
  templateAppJsEjs,
  templateIndexEjs,
  HeaderTemplateEjs,
  FooterTemplateEjs,
  templateIndexPug,
  templateAppJsPug,
  HeaderTemplatePug,
  FooterTemplatePug,
  envTemplateAPI,
  templateStyleCss,
} from "../templates/templates";
import { createEnvFile } from "../init/initNpm";

async function generateJavascriptTemplateBasic(dir: string) {
  try {
    await createEnvFile(path.join(dir), envTemplateBasic);
    createDir(path.join(dir, "src"));
    await writeFile(path.join(dir, "src", "index.js"), templateAppJsBasic);
  } catch (e) {
    return console.error(e);
  }
}

async function generateJavascriptTemplateAPI(dir: string) {
  try {
    await createEnvFile(path.join(dir), envTemplateAPI);

    createDir(path.join(dir, "src"));
    createDir(path.join(dir, "src", "routes"));

    await writeFile(path.join(dir, "src", "index.js"), appTemplateJsAPI);
    await writeFile(
      path.join(dir, "src", "routes", "api.js"),
      apiTemplateJsAPI
    );
  } catch (e) {
    return console.error(e);
  }
}

async function generateJavascriptTemplateEjs(dir: string) {
  try {
    await createEnvFile(path.join(dir), envTemplateBasic);

    createDir(path.join(dir, "src"));
    createDir(path.join(dir, "src", "views"));
    createDir(path.join(dir, "src", "views", "includes"));
    createDir(path.join(dir, "src", "public"));
    createDir(path.join(dir, "src", "public", "js"));
    createDir(path.join(dir, "src", "public", "css"));
    createDir(path.join(dir, "src", "public", "img"));

    await writeFile(path.join(dir, "src", "index.js"), templateAppJsEjs);
    await writeFile(
      path.join(dir, "src", "views", "index.ejs"),
      templateIndexEjs
    );
    await writeFile(
      path.join(dir, "src", "views", "includes", "header.ejs"),
      HeaderTemplateEjs
    );
    await writeFile(
      path.join(dir, "src", "views", "includes", "footer.ejs"),
      FooterTemplateEjs
    );
    await writeFile(path.join(dir, "src", "public", "js", "script.js"), "");
    await writeFile(
      path.join(dir, "src", "public", "css", "styles.css"),
      templateStyleCss
    );
  } catch (e) {
    return console.error(e);
  }
}

async function generateJavascriptTemplatePug(dir: string) {
  try {
    await createEnvFile(path.join(dir), envTemplateBasic);
    createDir(path.join(dir, "src"));
    createDir(path.join(dir, "src", "views"));
    createDir(path.join(dir, "src", "views", "includes"));
    createDir(path.join(dir, "src", "public"));
    createDir(path.join(dir, "src", "public", "js"));
    createDir(path.join(dir, "src", "public", "css"));
    createDir(path.join(dir, "src", "public", "img"));

    await writeFile(path.join(dir, "src", "index.js"), templateAppJsPug);
    await writeFile(
      path.join(dir, "src", "views", "index.pug"),
      templateIndexPug
    );
    await writeFile(
      path.join(dir, "src", "views", "includes", "header.pug"),
      HeaderTemplatePug
    );
    await writeFile(
      path.join(dir, "src", "views", "includes", "footer.pug"),
      FooterTemplatePug
    );
    await writeFile(path.join(dir, "src", "public", "js", "script.js"), "");
    await writeFile(
      path.join(dir, "src", "public", "css", "styles.css"),
      templateStyleCss
    );
  } catch (e) {
    return console.error(e);
  }
}

export {
  generateJavascriptTemplateBasic,
  generateJavascriptTemplateAPI,
  generateJavascriptTemplateEjs,
  generateJavascriptTemplatePug,
};
