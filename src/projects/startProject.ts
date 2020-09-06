import { isDir } from "../init/fs";
import path from "path";
import { startCmdProject } from "../init/initNpm";

async function startProject(
  confirm: boolean,
  nameProject: string,
  event: string
) {
  if (confirm) {
    const projectDir = path.join(nameProject);
    if (isDir(projectDir)) {
      await startCmdProject(projectDir, event);
    }
  }
}

export default startProject;
