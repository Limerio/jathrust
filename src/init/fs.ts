import fs from "fs";
import { execSync } from "child_process";

function createDir(dir: string) {
  try {
    return fs.mkdirSync(dir);
  } catch (e) {
    return console.error(e);
  }
}

function writeFile(file: string, data: string) {
  try {
    return fs.writeFileSync(file, data);
  } catch (e) {
    return e;
  }
}

function readFile(file: string): string {
  try {
    return fs.readFileSync(file, "utf-8");
  } catch (e) {
    return e;
  }
}

function isDir(dir: string) {
  try {
    return fs.statSync(dir).isDirectory();
  } catch (e) {
    return e;
  }
}

function removeDir(dir: string) {
  try {
    return fs.rmdir(
      dir,
      {
        recursive: true,
      },
      () => {}
    );
  } catch (e) {
    return e;
  }
}

export { createDir, writeFile, readFile, isDir, removeDir };
