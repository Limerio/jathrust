import prompts from "prompts";
import { newType, typeProject } from "./constants";
import { projectType, confirmDelete, confirmStart } from "./questions";
import createProject from "../projects/createProject";
import deleteProject from "../projects/deleteProject";

async function handler(option: string, nameProject: string): Promise<void> {
  if (option === newType.new) {
    const { typeOfProject, lang, template } = await prompts(projectType);
    if (typeOfProject === typeProject.basicExpress) {
      await createProject(
        nameProject,
        typeProject.basicExpress,
        lang,
        template
      );
    } else if (typeOfProject === typeProject.apiExpress) {
      await createProject(nameProject, typeProject.apiExpress, lang, template);
    }
  } else if (option === newType.delete) {
    const { confirm } = await prompts(confirmDelete);
    await deleteProject(confirm, nameProject);
  }
}

export default handler;
