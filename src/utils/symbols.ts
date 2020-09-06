import chalk from "chalk";
const isSupported =
  process.platform !== "win32" ||
  process.env.CI ||
  process.env.TERM === "xterm-256color";

export default isSupported
  ? {
      info: chalk.blue("ℹ"),
      success: chalk.green("✔"),
      warning: chalk.yellow("⚠"),
      error: chalk.red("✖"),
    }
  : {
      info: chalk.blue("i"),
      success: chalk.green("√"),
      warning: chalk.yellow("‼"),
      error: chalk.red("×"),
    };
