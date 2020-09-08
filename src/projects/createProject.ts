import path from "path";

import { initNpm, createTemplate, createJathrustFile } from "../init/initNpm";
import { createDir } from "../init/fs";
import { language } from "../utils/constants";
import { templateJathrustJson } from "../templates/templates";
import symbols from "../utils/symbols";
import installDB from "../init/installDB";
// import prompts from "prompts";
// import { questionsGithub } from "../utils/questions";

const dir = process.cwd();

async function createProject(
  nameProject: string,
  type: string,
  lang: string,
  template: string | null,
  graphqlIncludeConfirm: boolean | null
) {
  const projectDir = path.join(dir, nameProject);
  try {
    await createDir(projectDir);
    // const { githubURL } = await prompts(questionsGithub);
    await initNpm(projectDir, lang, nameProject);
    console.log(`${symbols.success} Npm initialization completed`);
    await installDB(projectDir);
    await createTemplate(
      projectDir,
      type,
      lang,
      template,
      graphqlIncludeConfirm
    );
    console.log(`${symbols.success} Template created`);
    await createJathrustFile(
      projectDir,
      templateJathrustJson
        .replace(
          "lang",
          `${lang === language.typescript ? "Typescript" : "Javascript"}`
        )
        .replace("nameProject", nameProject)
        .replace(
          "templateName",
          `${
            template === "none"
              ? ""
              : `,
  "template": "${template}"`
          }`
        )
    );
    console.log(`${symbols.success} Jathrust config file completed`);
  } catch (e) {}
}

export default createProject;
