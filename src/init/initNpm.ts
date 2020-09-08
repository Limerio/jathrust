import { execSync, exec } from "child_process";
import { writeFile, readFile } from "./fs";
import {
  language,
  typeProject,
  templateContentNodejs,
} from "../utils/constants";
import {
  generateJavascriptTemplateBasic,
  generateJavascriptTemplateAPI,
  generateJavascriptTemplateEjs,
  generateJavascriptTemplatePug,
} from "../gen/generateTemplateJs";
import {
  generateTypescriptTemplateBasic,
  generateTypescriptTemplateAPI,
  generateTypescriptTemplateEjs,
  generateTypescriptTemplatePug,
} from "../gen/generateTemplateTs";
import path from "path";

async function initNpm(dir: string, lang: string, nameProject: string) {
  await execSync("npm init -y", {
    cwd: dir,
  });

  const content = JSON.parse(readFile(`${dir}/package.json`));
  content.name = nameProject;
  content.scripts.dev =
    lang === language.javascript
      ? "nodemon ./src/index.js"
      : "nodemon --exec ts-node src/index.ts";
  content.scripts.start =
    lang === language.javascript
      ? "node ./src/index.js"
      : "node ./build/index.js";
  content.main = lang === language.javascript ? "src/index.js" : "src/index.ts";
  if (lang === language.typescript) content.scripts.build = "tsc --build";

  // if (githubURL.startsWith("http://github.com/")) {
  //   content.repository.type = "git";
  //   content.repository.url = `git+${githubURL}`;
  //   content.bug.url = githubURL.replace(".git", "/issues");
  //   content.homepage = githubURL.replace(".git", "#readme");
  // }

  writeFile(path.join(dir, "package.json"), JSON.stringify(content, null, 2));
  createGitIgnoreFile(
    path.join(dir),
    `node_modules/
package-lock.json
.env`
  );

  await installModule(dir, lang);
}

function installModule(dir: string, lang: string) {
  if (lang === language.typescript) {
    execSync(
      "npm i -D typescript ts-node @types/node nodemon morgan @types/morgan dotenv",
      {
        cwd: dir,
      }
    );

    execSync("npm i express @types/express", {
      cwd: dir,
    });
  } else if (lang === language.javascript) {
    execSync("npm i -D nodemon morgan", {
      cwd: dir,
    });

    execSync("npm i express dotenv", {
      cwd: dir,
    });
  }
}

function createTemplate(
  dir: string,
  projectType: string,
  lang: string,
  template: string | null,
  graphqlIncludeConfirm: boolean | null
) {
  if (lang === language.javascript) {
    if (projectType === typeProject.basicExpress && template === "none") {
      generateJavascriptTemplateBasic(dir);
    } else if (
      projectType === typeProject.basicExpress &&
      template === templateContentNodejs.ejs
    ) {
      execSync("npm i ejs path", {
        cwd: dir,
      });
      generateJavascriptTemplateEjs(dir);
    } else if (
      projectType === typeProject.basicExpress &&
      template === templateContentNodejs.pug
    ) {
      execSync("npm i pug path", {
        cwd: dir,
      });
      generateJavascriptTemplatePug(dir);
    } else if (projectType === typeProject.apiExpress) {
      generateJavascriptTemplateAPI(dir);
      if (graphqlIncludeConfirm) {
        execSync("npm install express-graphql graphql", {
          cwd: dir,
        });
      }
    }
  } else if (lang === language.typescript) {
    if (projectType === typeProject.apiExpress) {
      generateTypescriptTemplateAPI(dir);
      if (graphqlIncludeConfirm) {
        execSync("npm install express-graphql graphql @types/graphql", {
          cwd: dir,
        });
      }
    } else if (
      projectType === typeProject.basicExpress &&
      template === "none"
    ) {
      generateTypescriptTemplateBasic(dir);
    } else if (
      projectType === typeProject.basicExpress &&
      template === templateContentNodejs.ejs
    ) {
      execSync("npm i ejs path", {
        cwd: dir,
      });
      generateTypescriptTemplateEjs(dir);
    } else if (
      projectType === typeProject.basicExpress &&
      template === templateContentNodejs.pug
    ) {
      execSync("npm i pug path", {
        cwd: dir,
      });
      generateTypescriptTemplatePug(dir);
    }
  }
}

function createEnvFile(dir: string, data: string) {
  try {
    return writeFile(`${dir}/.env`, data);
  } catch (e) {
    return e;
  }
}

function createTsConfigFile(dir: string, data: string) {
  try {
    return writeFile(`${dir}/tsconfig.json`, data);
  } catch (e) {
    return e;
  }
}

function createGitIgnoreFile(dir: string, data: string) {
  try {
    return writeFile(`${dir}/.gitignore`, data);
  } catch (e) {
    return e;
  }
}

function createJathrustFile(dir: string, data: string) {
  try {
    return writeFile(`${dir}/jathrust.json`, data);
  } catch (e) {
    return e;
  }
}

function startCmdProject(dir: string, event: string) {
  const { stderr } = exec(`npm run ${event}`, {
    cwd: dir,
  });
}

export {
  initNpm,
  createTemplate,
  createEnvFile,
  createTsConfigFile,
  startCmdProject,
  createGitIgnoreFile,
  createJathrustFile,
};
