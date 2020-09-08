import prompts from "prompts";
import { newType, typeProject } from "./constants";
import { projectType, confirmDelete } from "./questions";
import createProject from "../projects/createProject";
import deleteProject from "../projects/deleteProject";

async function handler(option: string, nameProject: string): Promise<void> {
  if (option === newType.new) {
    const {
      typeOfProject,
      lang,
      template,
      graphqlIncludeConfirm,
    } = await prompts(projectType);
    if (typeOfProject === typeProject.basicExpress) {
      await createProject(
        nameProject,
        typeProject.basicExpress,
        lang,
        template,
        graphqlIncludeConfirm
      );
    } else if (typeOfProject === typeProject.apiExpress) {
      await createProject(
        nameProject,
        typeProject.apiExpress,
        lang,
        template,
        graphqlIncludeConfirm
      );
    }
  } else if (option === newType.delete) {
    const { confirm } = await prompts(confirmDelete);
    await deleteProject(confirm, nameProject);
  }
}

export default handler;
