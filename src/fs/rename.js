import fsPromises from "node:fs/promises";
import fs from "node:fs";

const { stderr } = process;

const errorMessage = "FS operation failed";
const color = {
  red: "\x1b[31m",
};
const path = "./src/fs/files/wrongFilename.txt";
const pathRename = "./src/fs/files/properFilename.md";

const rename = async () => {
  try {
    if (!fs.existsSync(path) || fs.existsSync(pathRename)) {
      console.log(`${color.red}Error: ${errorMessage}`);
    } else {
      await fsPromises.rename(path, pathRename);
    }
  } catch (err) {
    if (err) stderr.write(err.message);
  }
};

await rename();
