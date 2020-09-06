import { createDir, writeFile } from "../init/fs";
import path from "path";
import {
  templateAppTsBasic,
  envTemplateBasic,
  envTemplateAPI,
  apiTemplateTsAPI,
  appTemplateTsAPI,
  tsconfigTemplate,
  templateAppTsEjs,
  templateAppTsPug,
  templateIndexEjs,
  HeaderTemplateEjs,
  FooterTemplateEjs,
  templateStyleCss,
  HeaderTemplatePug,
  FooterTemplatePug,
  templateIndexPug,
} from "../templates/templates";
import { createEnvFile, createTsConfigFile } from "../init/initNpm";
import { write } from "fs";

async function generateTypescriptTemplateBasic(dir: string) {
  try {
    await createEnvFile(path.join(dir), envTemplateBasic);
    await createTsConfigFile(path.join(dir), tsconfigTemplate);
    createDir(path.join(dir, "src"));
    createDir(path.join(dir, "build"));
    await writeFile(path.join(dir, "src", "index.ts"), templateAppTsBasic);
  } catch (e) {
    return console.error(e);
  }
}

async function generateTypescriptTemplateAPI(dir: string) {
  try {
    await createEnvFile(path.join(dir), envTemplateAPI);
    await createTsConfigFile(path.join(dir), tsconfigTemplate);
    createDir(path.join(dir, "src"));
    createDir(path.join(dir, "src", "routes"));
    createDir(path.join(dir, "build"));

    await writeFile(path.join(dir, "src", "index.ts"), appTemplateTsAPI);
    await writeFile(
      path.join(dir, "src", "routes", "api.ts"),
      apiTemplateTsAPI
    );
  } catch (e) {
    return console.error(e);
  }
}

async function generateTypescriptTemplateEjs(dir: string) {
  try {
    await createEnvFile(path.join(dir), envTemplateBasic);
    await createTsConfigFile(path.join(dir), tsconfigTemplate);

    createDir(path.join(dir, "src"));
    createDir(path.join(dir, "src", "views"));
    createDir(path.join(dir, "src", "views", "includes"));
    createDir(path.join(dir, "src", "public"));
    createDir(path.join(dir, "src", "public", "js"));
    createDir(path.join(dir, "src", "public", "css"));
    createDir(path.join(dir, "src", "public", "img"));
    createDir(path.join(dir, "build"));

    await writeFile(path.join(dir, "src", "index.ts"), templateAppTsEjs);
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

// à faire

async function generateTypescriptTemplatePug(dir: string) {
  try {
    await createEnvFile(path.join(dir), envTemplateBasic);
    await createTsConfigFile(path.join(dir), tsconfigTemplate);

    createDir(path.join(dir, "src"));
    createDir(path.join(dir, "src", "views"));
    createDir(path.join(dir, "src", "views", "includes"));
    createDir(path.join(dir, "src", "views", "public"));
    createDir(path.join(dir, "src", "views", "public", "js"));
    createDir(path.join(dir, "src", "views", "public", "css"));
    createDir(path.join(dir, "src", "views", "public", "img"));
    createDir(path.join(dir, "build"));

    await writeFile(path.join(dir, "src", "index.ts"), templateAppTsPug);
    await writeFile(
      path.join(dir, "src", "views", "index.pug"),
      templateIndexPug
    );
    await writeFile(
      path.join(dir, "src", "views", "public", "js", "script.js"),
      ""
    );
    await writeFile(
      path.join(dir, "src", "views", "public", "css", "styles.css"),
      templateStyleCss
    );
  } catch (e) {
    return console.error(e);
  }
}

export {
  generateTypescriptTemplateBasic,
  generateTypescriptTemplateAPI,
  generateTypescriptTemplateEjs,
  generateTypescriptTemplatePug,
};
