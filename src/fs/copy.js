import fs from "node:fs";
import { join } from "node:path";

const { stderr } = process;

const folder = "./src/fs/files";
const folderCopy = "./src/fs/files_copy";
const errorMessage = "FS operation failed";
const color = {
  red: "\x1b[31m",
};

const copy = async () => {
  try {
    if (fs.existsSync(folderCopy) || !fs.existsSync(folder)) {
      console.log(`${color.red}Error: ${errorMessage}`);
    } else {
      await fs.promises.rm(folderCopy, { force: true, recursive: true });
      await fs.promises.mkdir(folderCopy);

      const givenDir = await fs.promises.readdir(folder, {
        withFileTypes: true,
      });

      givenDir.forEach(async (files) => {
        const folderFiles = join(folder, files.name);
        const folderCopyFiles = join(folderCopy, files.name);

        if (files.isFile())
          await fs.promises.copyFile(folderFiles, folderCopyFiles);
      });
    }
  } catch (err) {
    if (err) stderr.write(err.message);
  }
};

copy();
