import chalk from "chalk";
import prompts from "prompts";
import { questionsDatabase } from "../utils/questions";
import { execSync } from "child_process";
import path from "path";
import symbols from "../utils/symbols";
import { choicesDB } from "../utils/constants";

export default async function installDB(projectDir: string) {
  const dir = path.join(projectDir);
  const { confirmIncludeDB, includeDBName } = await prompts(questionsDatabase);
  if (confirmIncludeDB) {
    await execSync(`npm i ${includeDBName}`, {
      cwd: dir,
    });
    console.log(
      `${chalk.green(symbols.success)} ${
        choicesDB.find((db) => db.value === includeDBName).title
      } installed with success`
    );
  }
}
