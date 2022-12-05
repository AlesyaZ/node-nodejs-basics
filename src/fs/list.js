import fsPromises from "node:fs/promises";
import fs from "node:fs";

const { stderr } = process;

const errorMessage = "FS operation failed";
const color = {
  red: "\x1b[31m",
};
const path = "./src/fs/files";

const list = async () => {
  try {
    if (!fs.existsSync(path)) {
      console.log(`${color.red}Error: ${errorMessage}`);
    } else {
      const files = await fsPromises.readdir(path);
      console.log(files);
    }
  } catch (err) {
    if (err) stderr.write(err.message);
  }
};

await list();
