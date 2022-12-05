import fs from "node:fs";

const color = {
  red: "\x1b[31m",
};

const path = "./src/fs/files/fresh.txt";

const fileCreate = fs.createWriteStream(path);

const create = async () => {
  const fileText = "I am fresh and young";
  const errorMessage = "FS operation failed";

  fileCreate.write(fileText);

  if (fs.existsSync(path)) {
    console.log(`${color.red}Error: ${errorMessage}`);
  }
};

await create();
