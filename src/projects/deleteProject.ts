import path from "path";

import symbols from "../utils/symbols";
import { isDir, removeDir, readFile } from "../init/fs";

async function deleteProject(confirm: boolean, nameProject: string) {
  const dirProject = path.join(nameProject);
  if (confirm) {
    if (isDir(dirProject)) {
      if (
        JSON.parse(readFile(`${dirProject}/jathrust.json`)).projectDir ===
        nameProject
      ) {
        await removeDir(dirProject);
        console.log(`${symbols.success} Project deleted`);
      } else {
        console.log(`${symbols.error} This project is not a jathrust project`);
      }
    } else if (!dirProject) {
      console.log(`${symbols.warning} Unknown project`);
    }
  }
}

export default deleteProject;
