import fsPromises from "node:fs/promises";
import fs from "node:fs";

const { stderr } = process;

const errorMessage = "FS operation failed";
const color = {
  red: "\x1b[31m",
};
const path = "./src/fs/files/fileToRemove.txt";

const remove = async () => {
  try {
    if (!fs.existsSync(path)) {
      console.log(`${color.red}Error: ${errorMessage}`);
    } else {
      await fsPromises.rm(path);
    }
  } catch (err) {
    if (err) stderr.write(err.message);
  }
};

await remove();
